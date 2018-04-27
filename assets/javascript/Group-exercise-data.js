$(document).ready(function () {
  console.log(document);
  var searchTerm;
  var beginDate;
  var endDate;
  var numOfResults = $("#numOfResults").val();
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "ee0166e4d7ba467f90d3fb4b44d0e803",
    'q': searchTerm,
    'begin_date': beginDate,
    'end_date': endDate
  });




  var url;
  var apiKey = "ee0166e4d7ba467f90d3fb4b44d0e803"
  $(".snarfyboo").on("click", function (e) {
    console.log(e);
    e.preventDefault();
    searchTerm = $("#searchTerm").val();
    beginDate = $("#beginDate").val();
    endDate = $("#endDate").val();
    console.log("searchTerm: " + searchTerm);
    console.log("Start Date: " + beginDate);
    console.log("End Date: " + endDate);
    url = "https://api.nytimes.com/svc/v2/articlesearch.json?api-key==" + apiKey + "&q=" + searchTerm + "&begin_date=" + beginDate + "&end_date=" + endDate
    console.log(document);
    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "ee0166e4d7ba467f90d3fb4b44d0e803",
      'q': searchTerm,
      'begin_date': beginDate,
      'end_date': endDate
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function (result) {
var results = result.response.docs;
      for (var i = 0; i < 3; i++) {
      var newUrl = $("<p>").text("web_url: " + results[i].web_url);
      var byLine = $("<p>").text("Source: " + results[i].byline.original);
      var headline = $("<p>").text("Headline: " + results[i].headline.main);
      console.log("running");
      $("#articles").append(headline);
      $("#articles").append(byLine);
      $("#articles").append(newUrl);
      }
      console.log(results);
    }).fail(function (err) {
      throw err;
    });
  });
})