require("dotenv").config();
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

// Add the code required to import the `keys.js` file and store it in a variable.
var Keys = require("./keys.js");

// Access my keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

/* Make it so liri.js can take in one of the following commands:
* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`*/

var command = process.argv[2];
var name = process.argv[3];

if(command == "my-tweets") {
    myTweets();
} else if(command == "spotify-this-song") {
    spotifyThisSong();
} else if(command == "movie-this") {
    movieThis(name);
} else if(command == "do-what-it-says") {
    doWhatItSays();

function myTweets() {
    // This will show your last 20 tweets and when they were created at in your terminal/bash window.
    }

function spotifyThisSong(song_name) {
    /*This will show the following information about the song in your terminal/bash window
         
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from
    * If no song is provided then your program will default to "The Sign" by Ace of Base.
    */
    spotify.search({ type: 'track', query: song_name}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 
    
    console.log(data); 
    });

    } // end of spotify function

function movieThis (movie_name) {

request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
 
    console.log(
        "Name: " + JSON.parse(response.body).Title, "\n" +
        "Released: " + JSON.parse(response.body).Released, "\n" +
        "IMDB Rating: " + JSON.parse(response.body).imdbRating, "\n" +
        "Country: " + JSON.parse(response.body).Country, "\n" +
        "Language: " + JSON.parse(response.body).Language, "\n" +
        "Plot: " + JSON.parse(response.body).Plot, "\n" +
        "Actors: " + JSON.parse(response.body).Actors
    );
    }
    // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
}); /* end of request function */
} /* this is the end of this movie function */


function doWhatItSays () {
/*  * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.
*/
}

