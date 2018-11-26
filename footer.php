<?php
/**
 * The template for displaying the footer.
 *
 * @package Quotes
 */

?>

			</div><!-- #content -->
			<div class="footer">
            <div class="navigation-menu">
			<footer id="colophon" class="site-footer" role="contentinfo">
			<nav id="site-navigation" class="main-navigation" role="navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
</div>	

				</nav><!-- #site-navigation -->
				<div class="copyright-info">
				<h4 class="copy-right">Brought to you by <a href="https://redacademy.com/vancouver/" rel="link-page"><span class="link-page">RED Academy</span></a></h4>
</div>

</div>
					                     

				
				<!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
