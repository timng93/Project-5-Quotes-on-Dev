(function($) {
  $(document).ready(function() {

    let lastPage = '';
    console.log('Min');
    console.log(qod_vars);

    //get a random post and append content to the dom

    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();
      getQuote();
    });
    //ajax request

    function getQuote() {

        lastPage = document.URL;

      $.ajax({
        method: 'GET',
        url:
          qod_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
      //set quote= data[0]; console.log(quote);
              .done(function(data) {

          

          history.pushState(null, null, qod_vars.home_url + '/' + data[0].slug);

          $('.entry-content').empty();
          $('.entry-title').empty();
          $('.source').empty();

          $('.entry-content').append(` ${data[0].content.rendered}`);
          $('.entry-title').append(`&mdash; ${data[0].title.rendered}`);

          if (data[0]._qod_quote_source_url.length > 0) {
            $('.source').append(` <a href="${data[0]._qod_quote_source_url}">${data[0]._qod_quote_source}</a>`);
          } else {
            $('.source').append(` ${data[0]._qod_quote_source}`);

          }


          //Append Content to the DOM e.g. replace the quote content with API content

          console.log(data);
        })
        .fail(function(err) {
          //Append a message for the user or alert a message saying something is wrong
          console.log(err);
        });
    }
    //end of Get Quote

    $(window).on('popstate', function() {

      window.location.replace(lastPage);

    });


             //submit form and create new quote post

             $('#quote-submission-form').on('submit', function(event){
                
            event.preventDefault();
            postQuote();

             });

             function postQuote() {

              //get values of form inputs
              const quoteTitle = $('#quote-author').val();

               const quoteContent = $('#quote-content').val();

               const quoteSource = $('#quote-source').val();

               const quoteURL = $('#quote-source-url').val();



               
               $.ajax({
                 method: 'POST',
                 url: qod_vars.rest_url + 'wp/v2/posts',
                 data: {

                 
                  title: quoteTitle,
                  content: quoteContent,
                  _qod_quote_source: quoteSource,
                  _qod_quote_source_url: quoteURL,

                 

                 },
                 beforeSend: function (xhr) {

                  xhr.setRequestHeader( 'X-WP-Nonce', qod_vars.nonce );

                 }


               }).done(function(){

                console.log('response');

                $( "#quote-submission-form" ).slideUp( "slow");
                $('.quote-submission-wrapper').append(`<h3> Your quote was submitted successfully </h3>`);


                //.slideUp the form
                //append success message

               }).fail(function(){

                console.log('something went wrong');
                $('.quote-submission-wrapper').append(`<h3> Oops! You want to submit your quote again? </h3>`);


                //output message saying something is wrong

               });

             }


  });
  //end of doc ready
})(jQuery);
