$(document).ready(function () {




  function twitterAPI(searchTerm) {


    twitterURL = "https://e1yr-twitfeed-v1.p.rapidapi.com/feed.api?id=" + searchTerm
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
      var convertedXML = xmlToJson(response);

      // Twitter account
      
      console.log(title.charAt(10).toUpperCase() + title.slice(11, -2));

      for (var i = 0; i < 3; i++) {
      function callTweets(i) {
      var title = JSON.stringify(convertedXML.rss.channel.title);
      var timeAgo = JSON.stringify(convertedXML.rss.channel.item[i].description);
      var tweet = JSON.stringify(convertedXML.rss.channel.item[i].title)
      var link = JSON.stringify(convertedXML.rss.channel.item[i].link)


      // Tweet
      console.log(tweet.charAt(11).toUpperCase() + tweet.slice(12, -2))
      // How along ago was tweet
      console.log(timeAgo.charAt(10).toUpperCase() + timeAgo.slice(11, -2))
      // Link
      console.log(link.charAt(10).toLowerCase() + link.slice(11, -2))
      }
      callTweets()
    }

    }); 


    // XML to JSON
    function xmlToJson(xml) {
	
        // Create the return object
        var obj = {};
    
        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }
    
        // do children
        if (xml.hasChildNodes()) {
            for(var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
                    obj[nodeName] = xmlToJson(item);
                } else {
                    if (typeof(obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
        return obj;
    };

    // $("#twitterResult").text(JSON.stringify(response));
    
    }

    twitterAPI()

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

function twitterEmbed(data) {
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
    twitterAPI(textBox);
    console.log(textBox)
})


});