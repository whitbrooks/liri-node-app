// Node module imports needed to run the functions
require("dotenv").config();
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs'); //reads and writes files


// Get keys
var keys = require("./keys.js");


// Get command and arguments from command line
var command = process.argv[2];
var song_name = process.argv[3];
var movie_name = process.argv[3];

// Read command and run appropriate function
function readCommand() {
    if(command === "my-tweets") {
        myTweets();
    } else if(command === "spotify-this-song") {
        spotifyThisSong();
    } else if(command === "movie-this") {
        movieThis();
    } else if(command === "do-what-it-says") {
        doWhatItSays();
    }
}

readCommand();

// Get tweets
function myTweets() {
    
    var client = new Twitter(keys.twitter);
    var params = {screen_name: "iluvaripants"};
    
    client.get('statuses/user_timeline', params, function(error, tweets) {
        if (!error) {
            for(var i = 0; i< 20; i++){
            console.log("@iluvaripants: " + tweets[i].text);
            }
        }
    });
}


// Get song info
function spotifyThisSong() {

    var spotify = new Spotify(keys.spotify);

    if (!song_name) {
        song_name = "All That She Wants";
    }
    
    spotify.search({ type: 'track', query: song_name}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } 
        console.log(
        "Artist: " + data.tracks.items[0].album.artists[0].name, "\n" +
        "Track: " + data.tracks.items[0].name, "\n" +
        "Album: " + data.tracks.items[0].album.name, "\n" +
        "Spotify link: " + data.tracks.items[0].external_urls.spotify
        ); 

    }); 
}

// Get movie info
function movieThis () {

    if (!movie_name) {
        movie_name = "Mr. Nobody";
    }

    request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

        if (!error && response.statusCode === 200) {
    
        console.log(
            "Name: " + JSON.parse(body).Title, "\n" +
            "Released: " + JSON.parse(body).Released, "\n" +
            "IMDB Rating: " + JSON.parse(body).imdbRating, "\n" +
            "Country: " + JSON.parse(body).Country, "\n" +
            "Language: " + JSON.parse(body).Language, "\n" +
            "Plot: " + JSON.parse(body).Plot, "\n" +
            "Actors: " + JSON.parse(body).Actors
        );
        }
    }); 
} 

// Read command and arguments from text file
function doWhatItSays () {
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
          return console.log(error);
        } else {
            var randomArray = data.split(",");
            command = randomArray[0];
            song_name = randomArray[1];
            readCommand();

        } 
    });
}

