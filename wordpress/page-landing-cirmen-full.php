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
 * Extrai assets da LP (fonts, CSS inline, JS module) sem meta/title/favicon
 * que o tema WordPress já fornece.
 */
$cirmen_head_assets = '';
if ($head_html !== '' && preg_match_all(
  '/<(?:link|style|script)\b[^>]*>.*?<\/(?:style|script)>|<(?:link|meta)\b[^>]*\/?>/is',
  $head_html,
  $asset_matches
)) {
  foreach ($asset_matches[0] as $tag) {
    if (preg_match('/rel=["\']icon["\']/i', $tag)) {
      continue;
    }
    if (preg_match('/<meta\b/i', $tag) && !preg_match('/name=["\']description["\']/i', $tag)) {
      continue;
    }
    $cirmen_head_assets .= $tag . "\n";
  }
}

add_filter('body_class', static function ($classes) {
  $classes[] = 'cirmen-wp-landing';
  return $classes;
});

add_action('wp_head', static function () use ($cirmen_head_assets) {
  if ($cirmen_head_assets === '') {
    return;
  }
  echo "\n<!-- Cirmen LP assets -->\n";
  echo $cirmen_head_assets;
  echo "<!-- /Cirmen LP assets -->\n";
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
