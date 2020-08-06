$(document).ready(function () {


const reqOptions = { 'mode': 'cors', headers: { 'Access-Control-Allow-Origin': '*' } };


// News API

function newsAPI(searchNews) {
var url = 'http://newsapi.org/v2/everything?' +
          'q='+ searchNews +'&' +
          'from=2020-07-20&' +
          'sortBy=popularity&' +
          'apiKey=0d168a90835246daa2bda323429401ad';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        return response.json()
    }).then(function(myJson) {
        function callNews(myNews, myindex) {
                  var title = myNews.articles[myindex].title
                  var image = myNews.articles[myindex].urlToImage
                  var articleText = myNews.articles[myindex].description
                  var link = myNews.articles[myindex].url
                  var timeAgo = myNews.articles[myindex].publishedAt
                  var appendMe = $( ".news[value="+ myindex +"]" )
                  var titleText = $(".textNews[value="+ myindex +"]").text(title)
                  var imageSrc = $(".imageNews[value="+ myindex +"]").attr("src", image)
                  var articlesHTML = $(".articleNews[value="+ myindex +"]").text(articleText)
                  var linkLink = $(".linkNews[value="+ myindex +"]").attr("href", link)
                  var linkText = $(".linkNews[value="+ myindex +"]").text(link)
                  var timeAgoText = $(".timeAgo[value="+ myindex +"]").text(timeAgo)
                  appendMe.append(titleText, imageSrc, articlesHTML, linkLink, linkText, timeAgoText)
                  }
                  for (var i = 0; i < 3; i++) {
                    callNews(myJson, i)  
                  }
                })
            };
// Giphy API
function startGiphy(giphySearch) {
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://giphy.p.rapidapi.com/v1/gifs/search?q=funny%20" + giphySearch + "&api_key=PlIXOgVBmXH6He8OecVAQJUZvWA5c7HS",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "7bdb4eda7amsh95a13fc78c869e1p1a5fe1jsna086c268c24f"
	}
};
$.ajax(settings).done(function (response) {
    function callGiphy(myGiphy, myIndex) {
      var appendMe = $( ".GIPHY[value="+ myIndex +"]" )
      var myLink = $(".imageGIPHY[value="+ myIndex +"]").attr("src","https://i.giphy.com/media/" + myGiphy.data[myIndex].id + "/giphy.webp")
      appendMe.append(myLink)
      }
      for (var myIndex = 0; myIndex < 3; myIndex++) {
        callGiphy(response, myIndex)  
      }
});
};

// YouTube API
var youtubeKey = "AIzaSyCSuna94qQpTpkpN7MMm27lAdPnPgOjJ5U"
var urlYoutube = "https://www.googleapis.com/youtube/v3/search?part=id&q=tuto&type=video&key=" + youtubeKey

// Youtube request Function
function getVideo(searchInfo) {
    $.ajax({
      type: 'GET',
      url: urlYoutube,
      data: {
          q: searchInfo,
          part: 'snippet',
          maxResults: 3,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
        embedVideo(data)
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  };
// Using the Data Received from our Request
function embedVideo(data) {
    $('.embed1').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('.embed2').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId)
    $('.embed3').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId)
    $('.descriptionTitle1').text(data.items[0].snippet.title)
    $('.descriptionTitle2').text(data.items[1].snippet.title)
    $('.descriptionTitle3').text(data.items[2].snippet.title)
    $('.description1').text(data.items[0].snippet.description)
    $('.description2').text(data.items[1].snippet.description)
    $('.description3').text(data.items[2].snippet.description)
};
// search button listener
$(".searchBtn").on("click", function() {
    var textBox = $(".searchInput").val()
    getVideo(textBox);
    newsAPI(textBox)
    startGiphy(textBox)
})


});