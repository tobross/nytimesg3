$(document).ready(function () {
      console.log(document);
      var searchTerm = "Willie Nelson";
      var beginDate = "20180101";
      var endDate = "20180331";

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
              console.log(result);
            }).fail(function (err) {
              throw err;
            });
          });
        })