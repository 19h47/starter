<?php

/* -–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– 
 * Functions'prefix is starter_
 * -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

/* -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * 👁👁 includes necessary files
 * -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
include get_template_directory() . '/functions/_includes.php';

/* -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 *
 * Create your own starter_setup() function to override in a child theme.
 *
 * @since Starter 1.0
 * -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

add_action( 'after_setup_theme', 'starter_setup' );
function starter_setup() {

    /* -------------------------------------------------------------------------
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     * ---------------------------------------------------------------------- */
    add_theme_support( 'title-tag' );

    /* ------------------------------------------------------------------------- 
     * This theme uses wp_nav_menu() in two locations.
     * ---------------------------------------------------------------------- */
    register_nav_menus( array(
        'primary' => 'Primary Menu',
    ) );

    /* -------------------------------------------------------------------------      
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
     * ---------------------------------------------------------------------- */
    add_theme_support( 'post-thumbnails' );

}

/* -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Add scripts in theme.
 * -––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
add_action( 'wp_enqueue_scripts', 'starter_scripts', 11 );
function starter_scripts() {
    if ( ! is_admin() ) {
        /* ---------------------------------------------------------------------
         * Register STYLESHEETS
         * ------------------------------------------------------------------ */
        
        // Add webfonts
        $webfonts = array();
        foreach ( starter_webfonts() as $name => $url ) {
            wp_register_style( 'font-' . $name, $url, array(), null );
            $webfonts[] = 'font-' . $name;
        }

        // Global styles
        wp_register_style( 'starter-global', get_template_directory_uri() . '/dist/css/global.css', $webfonts, null );

        /* ---------------------------------------------------------------------
         * Register SCRIPTS
         * ------------------------------------------------------------------ */
        
        // remove wp-embed script from WordPress
        wp_deregister_script( 'wp-embed' );


        /* =====================================================================
         * jQuery
         * ================================================================== */
        // Remove native version of jQuery
        wp_deregister_script( 'jquery' );

        // Use custom CDN version instead
        wp_register_script( 'jquery', '//code.jquery.com/jquery-2.2.0.min.js', false, null, true );
        
        /* =====================================================================
         * Barba.js
         * ================================================================== */
        wp_register_script( 'barba', get_template_directory_uri() . '/node_modules/barba.js/dist/barba.min.js', false, null, true );

        /* =====================================================================
         * GSAP
         * ================================================================== */
        wp_register_script( 'gsap', '//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js', false, null, true );

        /* =====================================================================
         * RequireJS
         * http://requirejs.org/
         * ================================================================== */
        wp_register_script( 'configjs', get_template_directory_uri() . '/scripts/config.js', false, null, true );
        wp_register_script( 'requirejs', get_template_directory_uri() . '/scripts/require.js', array( 'configjs' ), null, true );

        wp_register_script('starter-main', get_template_directory_uri() . '/scripts/main.js', array( 'requirejs' ), null, true );

        $args = array
        (
            'template_directory_uri'    => get_template_directory_uri(),
            'home_url'                  => home_url( '/' ),
            'base_url'                  => site_url(),
            'js_url'                    => get_template_directory_uri() . '/scripts/app',
            'deps'                      => get_template_directory_uri() . '/scripts/main.js',
        );

        wp_localize_script( 
            'configjs', 
            'wp', 
            $args
        ); 
  
        /* ---------------------------------------------------------------------
         * Then load
         * ------------------------------------------------------------------ */
        wp_enqueue_script( 'barba' );
        wp_enqueue_script( 'gsap' );
        wp_enqueue_script( 'starter-main' );
        wp_enqueue_style( 'starter-global' );
    }
}

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * List webfonts used by the theme.
 * @return array
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
function starter_webfonts() {
    return array(
        // 'playfair-display'  => '//fonts.googleapis.com/css?family=Playfair+Display',
    );
}

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Add smoothState namespace to smoothstate-container.
 * @param  string $namespace Explicit namespace
 * @return string
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
add_filter( 'barba_namespace', 'starter_barba_namespace' );
function starter_barba_namespace( $namespace ) {
    /* -------------------------------------------------------------------------
     * Do not override given namespace
     * ---------------------------------------------------------------------- */
    if ( ! empty( $namespace ) ) {
        return $namespace;
    }

    if ( is_front_page() && is_page() ) {
        return 'home';
    }

    if( is_home() ){
        return 'posts';
    }

    if ( is_single() ) {
        return 'post';
    }

    if ( is_page( ) ) {
        return 'page';
    }

    return $namespace;
}