<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

            <section class="quote-submission"> 
            <div class="single-post">
<div class="icon-left">
<i class="fas fa-quote-left"></i>
</div>
                <div class="entry-content">
                <header class="entry-header">

                <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                    </header>

                <?php if( is_user_logged_in() && current_user_can( 'edit_posts' ) ): ?>

                <div class="quote-submission-wrapper">

                    <form name="quoteForm" id="quote-submission-form">

                        <div>
                     <label for = "quote-author"> Author of Quote </label>
</div>
                         <div>
                     <input type="text" name="quote_author" id="quote-author">
                        </div>

                        <div>
                    <label for = "quote-content"> Quote </label>
</div>
                        <div>
                    <textarea name="quote_content" id="quote-content" rows="3" columns="20"></textarea>

                       </div>

                       <div>
                    <label for="">Where did you find this quote? (e.g. book name)
</label>
</div>
                  <div>
        <input type="text" name="quote_source" id="quote-source">

                       </div>

                       <div>
                    <label for="">Provide the URL of the quote source, if available. </label>
</div>
                    <div>
                    <input type="url" name="quote_source_url" id="quote-source-url">


                      </div>
                     <div>
                   <input class="submit-quote" type="submit" value="Submit Quote"> 
</div>
                    </form>

                </div>
</div>

<!--quote-submission-wrapper -->

                <?php else: ?>

                <p>Excuse me, you must be logged in to submit the quote</p>

                <p><?php echo sprintf( '<a href="%1s">%2s</a>', esc_url( wp_login_url() ),'Click here to log in.' );?>

                <?php endif; ?>
</div>
                <div class="icon-right">
	<i class="fas fa-quote-right"></i>
</div>

</div>
            </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
