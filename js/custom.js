(function($) {
  $(function() {

    let lastPage = '';


    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();
      getQuote();
    });

    function getQuote() {

        lastPage = document.URL;

      $.ajax({
        method: 'GET',
        url:
          qod_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
              .done(function(data) {

          history.pushState(null, null, qod_vars.home_url + '/' + data[0].slug);

          $('.entry-content').empty();
          $('.entry-title').empty();
          $('.source').empty();

          $('.entry-content').append(` ${data[0].content.rendered}`);
          $('.entry-title').append(`&mdash; ${data[0].title.rendered}`);

          if (data[0]._qod_quote_source_url.length > 0) {
            $('.source').append(`, <a href="${data[0]._qod_quote_source_url}">${data[0]._qod_quote_source}</a>`);
          } else if (data[0]._qod_quote_source.length > 0) {
        
            $('.source').append(`, ${data[0]._qod_quote_source}`);

          } else {
            $('.source').append("");


          }
       
        })
        .fail(function(err) {
          $('.source').append("");

          
        });
    }
    //end of Get Quote

    $(window).on('popstate', function() {

      window.location.replace(lastPage);

    });

             $('#quote-submission-form').on('submit', function(event){
                
            event.preventDefault();
            postQuote();

             });

             function postQuote() {

              const quoteTitle = $('#quote-author').val();

               const quoteContent = $('#quote-content').val();

               const quoteSource = $('#quote-source').val();

               const quoteURL = $('#quote-source-url').val();
              
              const JSONValue = {
                'title': quoteTitle,
                'content': quoteContent,
                  '_qod_quote_source': quoteSource,
                  '_qod_quote_source_url': quoteURL,
                  status: 'publish',

              };
               $.ajax({
                 method: 'POST',
                 url: qod_vars.rest_url + 'wp/v2/posts',
                 data: JSONValue,
                 beforeSend: function (xhr) {

                  xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.nonce );

                 }


               }).done(function(){


                $( "#quote-submission-form" ).slideUp( "slow");
                $('.quote-submission-wrapper').append('<h3>'+ qod_vars.success + '</h3>');

               }).fail(function(){
                 

                $( "#quote-submission-form" ).slideUp( "slow");

                $('.quote-submission-wrapper').append('<h3>'+ qod_vars.failure + '</h3>');
               });
             }


  });
  //end of doc ready
})(jQuery);
