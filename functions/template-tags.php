<?php

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Retrieve data-namespace for Barba.js.
 * @return string
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

if ( ! function_exists( 'get_barba_namespace' ) ) :

    function get_barba_namespace( $namespace = '' ) {
        /* ---------------------------------------------------------------------
         * Filter the namespace for the current post or page.
         *
         * @param string $namespace Given namespace as parameter.
         * ------------------------------------------------------------------ */
        $namespace = apply_filters( 'barba_namespace', $namespace );

       	return $namespace;
    }

endif;

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Display data-namespace for Barba.js.
 * @return string
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

if ( ! function_exists( 'barba_namespace' ) ) :

    function barba_namespace( $namespace = '' ) {
    	$namespace = get_barba_namespace( $namespace );

    	if ( empty( $namespace ) ) {
    		return;
    	}

        echo 'data-namespace="' . $namespace . '"';
    }

endif;

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Display data-title for Barba.js.
 * Usefull when using custom HTTP header to return only container.
 * @return string
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

if ( ! function_exists( 'barba_title' ) ) :

    function barba_title() {
        echo 'data-title="' . wp_get_document_title() . '"';
    }

endif;

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * Check if a meta variable from Barba.js exists in current HTTP headers.
 * @return boolean
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */

if ( ! function_exists( 'is_from_barba' ) ) :

    function is_from_barba() {
        return (
            isset( $_SERVER ) && 
            isset( $_SERVER['HTTP_X_BARBA'] ) && 
            'yes' === strtolower( $_SERVER['HTTP_X_BARBA'] )
        );
    }

endif; 