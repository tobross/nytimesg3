$(document).ready(function() {
console.log("document test");

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

$(".snarfyboo").on("click", function(event){ 
  searchTerm = $("#searchTerm", value);
  beginDate = $("#beginDate", value);
  endDate = $("#endDate", value);
  url = "https://api.nytimes.com/svc/v2/articlesearch.json?api-key==" + apiKey + "&q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate 
  console.log(document);
  event.preventDefault();

$.ajax({
  url: url,
  method: 'GET',
})
.then(function(result) {
  console.log(result);

})
})

// function formClear() {
//   document.getElementById(".clear").reset();
// }
