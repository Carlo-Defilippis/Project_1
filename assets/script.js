$(document).ready(function () {


  const reqOptions = { 'mode': 'cors', headers: { 'Access-Control-Allow-Origin': '*' } };

//   function twitterAPI(searchTerm) {


//     twitterURL = "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api?id=" + searchTerm
//     var settings = {
//       "async": true,
//       "crossDomain": true,
//       "url": twitterURL,
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "e1yr-twitfeed-v1.p.rapidapi.com",
//         "x-rapidapi-key": "728344f90amshee9ec3138f80f9ep14a9d1jsn0555e41223c3"
//       }
//     }
  
//     $.ajax(settings).done(function (response) {
//       var convertedXML = xmlToJson(response);
//       console.log(convertedXML)
//       // Twitter account
//       var title = JSON.stringify(convertedXML.rss.channel.title);
//       $('.titleTweet').text(title.charAt(10).toUpperCase() + title.slice(11, -2))
//       var tweet = JSON.stringify(convertedXML.rss.channel.item[0].title)
//       console.log("This is the tweet var: ", tweet)
//       console.log(title.charAt(10).toUpperCase() + title.slice(11, -2));

//       for (var i = 0; i < 3; i++) {
//       function callTweets(index1) {
    
//       var tweet = JSON.stringify(convertedXML.rss.channel.item[i].title)
//       var timeAgo = JSON.stringify(convertedXML.rss.channel.item[i].description);
//       var link = JSON.stringify(convertedXML.rss.channel.item[i].link)
    
//       var appendMe = $(".tweet").val([i])

//       var textTweet = $(".textTweet").text(tweet.charAt(10).toUpperCase() + tweet.slice(11, -2))
//       var timeTweet = $(".timeTweet").text(timeAgo.charAt(10).toUpperCase() + timeAgo.slice(11, -2))
//       var linkTweet = $(".linkTweet").text(link.charAt(10).toLowerCase() + link.slice(11, -2))

//       appendMe.append(textTweet, timeTweet, linkTweet)
//       // Tweet
//       console.log(tweet.charAt(10).toUpperCase() + tweet.slice(11, -2))
//       // How along ago was tweet
//       console.log(timeAgo.charAt(10).toUpperCase() + timeAgo.slice(11, -2))
//       // Link
//       console.log(link.charAt(10).toLowerCase() + link.slice(11, -2))
//       }
//       callTweets(i)
//     }

//     }); 
console.log("This is the news Jquery: ", $( ".news[value="+ 0 +"]" ))
console.log("This is the news Jquery: ", $( ".news[value="+ 1 +"]" ))
console.log("This is the news Jquery: ", $( ".news[value="+ 2 +"]" ))

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
      console.log(myJson.articles[0])

      function callNews(myNews, myindex) {
    
                  console.log("This is my index in the function ",myindex)

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
"url": "https://giphy.p.rapidapi.com/v1/gifs/search?q=funny%20" + giphySearch + "&api_key=dc6zaTOxFJmzC",
"method": "GET",
"headers": {
  "x-rapidapi-host": "giphy.p.rapidapi.com",
  "x-rapidapi-key": "7bdb4eda7amsh95a13fc78c869e1p1a5fe1jsna086c268c24f"
}
}

$.ajax(settings).done(function (response) {
  console.log(response);

  function callGiphy(myGiphy, myindex) {


    var appendMe = $( ".GIPHY[value="+ myindex +"]" )


    var linkLink = $(".imageGIPHY[value="+ myindex +"]").attr("href","https://i.giphy.com/media/" + myGiphy.data[myIndex].id + "/giphy.webp")


    appendMe.append(titleText, imageSrc, articlesHTML, linkLink, linkText, timeAgoText)
    }
    
    for (var i = 0; i < 3; i++) {
      callGiphy(response, i)  
    }
});
}



var youtubeKey = "AIzaSyBWArvRjNr5f8PVu_tHo9gqX35bWgx6PSM"
var urlYoutube = "https://www.googleapis.com/youtube/v3/search?part=id&q=tuto&type=video&key=" + youtubeKey

// Request Function
function getVideo(searchInfo) {
  console.log("Get Video was called")
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
      console.log(data)  
      embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
  });
}

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
}


$(".searchBtn").on("click", function() {
  var textBox = $(".searchInput").val()
  getVideo(textBox);
  newsAPI(textBox)
  startGiphy(textBox)
  console.log(textBox)
})


});