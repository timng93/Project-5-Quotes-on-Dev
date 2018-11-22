(function($) {
  $(document).ready(function() {
    console.log('Min');
    console.log(qod_vars);

    //get a random post and append content to the dom

    $('#new-quote-button').on('click', function(event) {
      event.preventDefault();
      getQuote();
    });
    //ajax request

    function getQuote() {
      $.ajax({
        method: 'GET',
        url:
          qod_vars.rest_url +
          'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1'
      })
        .done(function(data) {
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
  });
})(jQuery);
