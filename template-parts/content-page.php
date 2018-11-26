<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @package Quotes
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
<div class="single-post">
<div class="icon-left">
<i class="fas fa-quote-left"></i>
</div>
<div class="content-page">

	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->


		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
				'after'  => '</div>',
			) );
		?>
	</div>
	<div class="icon-right">
	<i class="fas fa-quote-right"></i>
</div>
			</div><!-- .entry-content -->
</article><!-- #post-## -->
