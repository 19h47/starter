<?php /* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Starter
 * @since Starter 1.0
 * ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */ ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

	<?php if( is_home() || is_category() ) : ?>
		<?php
		/* FIRST
		 * Note: This function only returns results from the default “category” taxonomy. For custom taxonomies use get_the_terms().
		 https://developer.wordpress.org/reference/functions/get_the_category/
		 */
		$categories = get_the_terms( $post->ID, 'category' );
		// now you can view your category in array: ?>
		<!-- <pre> -->
		<?php // var_dump( $categories ); ?>
		<!-- </pre> -->
		<?php // or you can take all with foreach:
		foreach( $categories as $category ) : ?>
		    <?php echo $category->name; ?>
		<?php endforeach; ?>
	<?php endif; ?>
	
	<?php the_content(); ?>
	<?php get_the_title(); ?>

</article>
			