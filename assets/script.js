$(document).ready(function() {

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
});

// Youtube API
// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.

var youtubeAPI = "AIzaSyAVriwBT3wQUQzFJiOOpr1P2e2KImIc5o0"
var youtube = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=php&key=" + youtubeAPI

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey(youtubeAPI);
}
 
// Called when the search button is clicked in the html code
$(".searchBTN").on(function() {
    var query = $('#query').val();
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:query
    });
});

    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);

// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML = responseString;
}

onClientLoad()


});