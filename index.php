<?php /* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage starter
 * @since Starter 1.0
 * ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */ ?>
 
<?php get_header(); ?>

<main role="main">
	

	<?php if ( have_posts() ) : ?>

			<?php if ( is_home() && ! is_front_page() ) : ?>
				<header>
					<h1><?php single_post_title(); ?></h1>
				</header>
			<?php endif; ?>

			<?php // Start the loop. ---------------------------------------- ?>
			<?php while ( have_posts() ) : the_post(); ?>
	
				<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

			<?php // End the loop. -------------------------------------------?>
			<?php endwhile; ?>

		<?php // If no content, include the "No posts found" template. -------?>
		<?php else : ?>

			<?php get_template_part( 'template-parts/content', 'none' ); ?>
		
	<?php endif; ?>

</main>

<?php get_footer(); ?>