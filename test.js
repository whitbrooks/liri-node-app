var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '7TML35885HRwMbbcCSmQzWmac',
  consumer_secret: 'tNcM2XO9DkALiMRRWL7DThw2pNaFFl9MSBBbA7iSbZXpSuzskF',
  access_token_key: '1027796573986545664-weguGQbFNrCgGmoGvEueBU3qR50x3K',
  access_token_secret: 'FYnluBgfQcuBnzI0wJfmsfVQWeAVHgwkWNu5UYnT1gois'
});
 
function myTweets(name) {
  // This will show your last 20 tweets and when they were created at in your terminal/bash window.

var params = {screen_name: name};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for(var i = 0; i< 20; i++){
      console.log("@iluvaripants: " + tweets[i].text);
      }
  }
  });
}

myTweets();