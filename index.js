$(document).ready(function() {
  var url = "http://hn.algolia.com/api/v1/search?query=javascript";
  $.getJSON(url, function(data) {
    var news = data.hits;
    var newsCount = news.length;

    console.log(news);
    $(".read").on("click", function() {
      var current = news[Math.floor(Math.random() * 20)];
      $(".newsQuote").html(current.title);
      $(".newsQuote").attr("href", current.url);
      $(".quoteAuthor").html(current.author);
      $(".read").text("Get More News");
      $(".tweetQuote")
        .attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            current.title +
            " - " +
            current.author
        )
        .removeClass("disabled");
    });
  });
});
