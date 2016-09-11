<?php
/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * The template for displaying the header
 *
 * @package WordPress
 * @subpackage Starter
 * @since Starter 1.0
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */ ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<?php wp_head(); ?>
	</head>

	<body>
	
	<header role="banner">
		<h1>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
				<?php bloginfo( 'name' ); ?>		
			</a>
		</h1>

		<?php if ( has_nav_menu( 'primary' ) ) : ?>
			<nav role="navigation" aria-label="Primary Menu">
				<?php
					wp_nav_menu( array(
						'theme_location' 	=> 'primary',
						'menu_class'		=> 'menu-inline'
					 ) );
				?>
			</nav>
		<?php endif; ?>
				
	</header>
	
	<?php if( is_home() || is_category() ) : ?>

        <?php $tax = 'category';
        $terms = get_terms( $tax );
        $count = count( $terms ); ?>

        <?php if ( $count > 0 ): ?>
            <div class="post-tags">
            <?php foreach ( $terms as $term ) : ?>
                <?php $term_link = get_term_link( $term, $tax ); ?>
                <a href="<?php echo $term_link; ?>" class="tax-filter" title="<?php echo $term->slug; ?>">

                	<?php echo $term->name; ?>
                	
                </a>

            <?php endforeach; ?>

            	<a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>" class="tax-filter" title="Toutes les catégories">

                	Toutes les catégories
                	
                </a>

            </div>

        <?php endif; ?>
	<?php endif; ?>

	<div id="barba-wrapper">
		<div <?php body_class( 'barba-container' ) ?> <?php barba_namespace() ?> <?php barba_title() ?>>

