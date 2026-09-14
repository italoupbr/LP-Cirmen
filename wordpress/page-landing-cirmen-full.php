<?php
/**
 * Template Name: Landing Cirmen (Full)
 *
 * Embute a LP compilada entre o header (navbar) e o footer nativos do tema.
 *
 * SUBIR NO FTP (conteúdo de wordpress/theme-upload/):
 *   wp-content/themes/SEU-TEMA-ATIVO/cirmen-landing-page.html
 *   wp-content/themes/SEU-TEMA-ATIVO/page-landing-cirmen-full.php
 *
 * NO PAINEL WP:
 *   1. Páginas → Nova → Modelo "Landing Cirmen (Full)" → Publicar
 *   2. Configurações → Leitura → Página estática → Home
 */

$html_path = get_stylesheet_directory() . '/cirmen-landing-page.html';

if (!is_readable($html_path)) {
  wp_die('Arquivo cirmen-landing-page.html não encontrado em wp-content/themes/' . get_stylesheet() . '/');
}

$html = file_get_contents($html_path);

$head_html = '';
if (preg_match('/<head[^>]*>(.*?)<\/head>/is', $html, $head_match)) {
  $head_html = $head_match[1];
}

$body_html = '<div id="root"></div>';
if (preg_match('/<body[^>]*>(.*?)<\/body>/is', $html, $body_match)) {
  $body_html = trim($body_match[1]);
}

/**
 * Extrai tags pareadas (<script>, <style>) por posição — evita regex em bundles ~2MB
 * (PCRE backtrack) e o bug de misturar <link rel="icon"> com o JS até </script>.
 */
$cirmen_extract_paired = static function ($html, $tag) {
  $out = [];
  $offset = 0;
  $open = '<' . $tag;
  $close = '</' . $tag . '>';
  $lower = strtolower($html);
  $open_len = strlen($open);
  $close_len = strlen($close);

  while (($start = strpos($lower, $open, $offset)) !== false) {
    $next = $start + $open_len;
    if ($next < strlen($html) && strpos(" \t\n\r/>", $html[$next]) === false) {
      $offset = $next;
      continue;
    }
    $end = strpos($lower, $close, $start);
    if ($end === false) {
      break;
    }
    $end += $close_len;
    $out[] = substr($html, $start, $end - $start);
    $offset = $end;
  }

  return $out;
};

$cirmen_extract_void = static function ($html, $tag) {
  $out = [];
  $offset = 0;
  $open = '<' . $tag;
  $lower = strtolower($html);
  $open_len = strlen($open);

  while (($start = strpos($lower, $open, $offset)) !== false) {
    $next = $start + $open_len;
    if ($next < strlen($html) && strpos(" \t\n\r/>", $html[$next]) === false) {
      $offset = $next;
      continue;
    }
    $end = strpos($html, '>', $start);
    if ($end === false) {
      break;
    }
    $out[] = substr($html, $start, $end - $start + 1);
    $offset = $end + 1;
  }

  return $out;
};

$cirmen_head_assets = '';
$cirmen_scripts = '';

foreach ($cirmen_extract_void($head_html, 'link') as $tag) {
  if (preg_match('/rel=["\']icon["\']/i', $tag)) {
    continue;
  }
  $cirmen_head_assets .= $tag . "\n";
}

foreach ($cirmen_extract_paired($head_html, 'style') as $tag) {
  $cirmen_head_assets .= $tag . "\n";
}

foreach ($cirmen_extract_paired($head_html, 'script') as $tag) {
  $cirmen_scripts .= $tag . "\n";
}

if ($cirmen_scripts === '') {
  wp_die('Cirmen LP: nenhum <script> encontrado em cirmen-landing-page.html — rebuild e reenvie o HTML.');
}

add_filter('body_class', static function ($classes) {
  $classes[] = 'cirmen-wp-landing';
  return $classes;
});

add_action('wp_head', static function () use ($cirmen_head_assets) {
  if ($cirmen_head_assets === '') {
    return;
  }
  echo "\n<!-- Cirmen LP head assets -->\n";
  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
  echo $cirmen_head_assets;
  echo "<!-- /Cirmen LP head assets -->\n";
}, 5);

// Scripts depois do #root (e do markup do tema) para o React montar com segurança.
add_action('wp_footer', static function () use ($cirmen_scripts) {
  echo "\n<!-- Cirmen LP scripts -->\n";
  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
  echo $cirmen_scripts;
  echo "<!-- /Cirmen LP scripts -->\n";
}, 5);

get_header();
?>
<style id="cirmen-wp-chrome">
  /*
    Mantém navbar/footer do tema e zera margens/paddings do miolo
    para a LP ocupar 100% da largura entre eles (margem correta = a da própria LP).
  */
  body.cirmen-wp-landing .entry-header,
  body.cirmen-wp-landing .page-header,
  body.cirmen-wp-landing .wp-block-post-title,
  body.cirmen-wp-landing .entry-footer {
    display: none !important;
  }

  body.cirmen-wp-landing #content,
  body.cirmen-wp-landing #primary,
  body.cirmen-wp-landing .site-content,
  body.cirmen-wp-landing .content-area,
  body.cirmen-wp-landing .site-main,
  body.cirmen-wp-landing main.site-main,
  body.cirmen-wp-landing .entry-content,
  body.cirmen-wp-landing .wp-block-post-content,
  body.cirmen-wp-landing .ast-container,
  body.cirmen-wp-landing .ast-container-fluid,
  body.cirmen-wp-landing .container,
  body.cirmen-wp-landing .container-fluid,
  body.cirmen-wp-landing .wrap,
  body.cirmen-wp-landing .site-inner {
    max-width: none !important;
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  #cirmen-landing-wrap,
  #cirmen-landing-wrap #root {
    display: block;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0;
  }
</style>
<div id="cirmen-landing-wrap">
<?php
  // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- HTML compilado da LP (assets embutidos).
  echo $body_html;
?>
</div>
<?php
get_footer();
