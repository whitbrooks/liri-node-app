var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "b1ad0d4c85f546a9b409c42ecd7ebbfd",
  secret: "ab665648cce5429790d34b0552d6cc55"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.album); 
  });