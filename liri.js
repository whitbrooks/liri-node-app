require("dotenv").config();
var request = require("request");

// Add the code required to import the `keys.js` file and store it in a variable. ????

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var command = process.argv[2];
var name = process.argv[3];


/* Make it so liri.js can take in one of the following commands:

* `my-tweets`
* `spotify-this-song`
* `movie-this`
* `do-what-it-says`
?????
*/

/* if(command == "my-tweets") {
    myTweets();
} 
*/

if(command == "movie-this") {
    movieThis(name);
}


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
}

function movieThis (movie_name) {



// * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
/* This will output the following information to your terminal/bash window:


       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
*/


request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

    console.log(JSON.parse(response.body));

//     console.log(
//         "Name: " + JSON.parse(response.body).Title, "\n" +
//         "Released: " + JSON.parse(response.body).Released, "\n" +
//         "IMDB Rating: " + JSON.parse(response.body).Ratings.imdbRating, "\n" +
//         "Country: " + JSON.parse(response.body).Country, "\n" +
//         "Released: " + JSON.parse(response.body).Released, "\n" +
//         "Released: " + JSON.parse(response.body).Released, "\n" +
//     )
//   }
}); /* end of request function */
} /* this is the end of this movie function */

function doWhatItSays () {
/*  * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
     * Feel free to change the text in that document to test out the feature for other commands.
*/
}

