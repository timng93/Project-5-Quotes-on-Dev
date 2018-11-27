<?php
/**
 * The template for displaying the footer.
 *
 * @package Quotes
 */

?>

			</div><!-- #content -->
			<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="footer">
			
			<div class="navigation-menu">

			<nav id="site-navigation" class="main-navigation" role="navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
					</nav>
            </div>	

				<!-- #site-navigation -->
				<div class="copyright-info">
				<h4 class="copy-right">Brought to you by <a href="https://redacademy.com/vancouver/"><span class="link-page">RED Academy</span></a></h4>
</div>


					                     

				
				<!-- .site-info -->
			
			</div>
			</footer><!-- #colophon -->
		
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
