$(document).ready(function () {

response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api?id=google",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "e1yr-twitfeed-v1.p.rapidapi.com",
		"x-rapidapi-key": "7bdb4eda7amsh95a13fc78c869e1p1a5fe1jsna086c268c24f"
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
});

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
    response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
	
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



// Request Function
function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyAVriwBT3wQUQzFJiOOpr1P2e2KImIc5o0',
          q: "cats",
          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
          embedVideo(data)
          console.log(data)
          data.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }

// Using the Data Received from our Request
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}

// Call the function to search
getVideo();


});