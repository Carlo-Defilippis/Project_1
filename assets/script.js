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