$(document).ready(function () {



  function twitterAPI() {

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api?id=google",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "e1yr-twitfeed-v1.p.rapidapi.com",
        "x-rapidapi-key": "728344f90amshee9ec3138f80f9ep14a9d1jsn0555e41223c3"
      }
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    //  ;
    }); $("#twitterResult").text(JSON.stringify(response));
    
    }

    

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://giphy.p.rapidapi.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "7bdb4eda7amsh95a13fc78c869e1p1a5fe1jsna086c268c24f"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    $("giphyResult1").text(JSON.stringify(response));

//    response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
});

// Youtube api
// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg

// Youtube API TEST



var youtubeKey = "AIzaSyAVriwBT3wQUQzFJiOOpr1P2e2KImIc5o0"
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
        // data.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
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

// Call the function to search


$(".searchBtn").on("click", function() {
    var textBox = $(".searchInput").val()
    getVideo(textBox);
    console.log(textBox)
})


});