<?php
/**
 * Template Name: Landing Cirmen (Full)
 */
$html_path = get_stylesheet_directory() . '/cirmen-landing-page.html';

if (!is_readable($html_path)) {
  wp_die('Arquivo cirmen-landing-page.html não encontrado em wp-content/themes/' . get_stylesheet() . '/');
}

readfile($html_path);
exit;
