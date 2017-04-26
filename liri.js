
// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
// Liri Homework 



//  Resource setup - Twitter Keys, Node Packages, 

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// Requirements 
var logFile = require("fs");         // Output to logfile
var twitter = require('twitter');    // Twitter // 
var spotify = require('spotify');    // Spotify
var request = require("request");    // OMDB - movie query 
var fullArg = process.argv.slice(2); // Strip System String
var nullArg = false;                 // Flag for missing arguements
var commArg = argPar(fullArg);
var commAnd = commArg[0];
var argUmnt = commArg[1];



switch(commAnd) {

        case 'my-tweets':
            ;
       
        break;

        case 'spotify-this-song':
        spotReq(argUmnt);
        break;

        case 'movie-this':
        movie(argUmnt);
        break;

		case 'do-what-it-says':
       
        break;

        default:
        console.log('I did not understand that');
        break;
}



function movie(mov)
{

var movName = mov;

if (movName === null) {
    movName="Mr. Nobody";
}

var queryUrl = "http://www.omdbapi.com/?t=" + movName + "&y=&plot=short&r=json&tomatoes=true";
// This line is just to help us debug against the actual URL.
console.log(queryUrl);
request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("TItle: " + JSON.parse(body).Title);
    console.log("IMDB Rating: " + JSON.parse(body).Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
  }
  else {
    console.log("Sorry, I don't know that movie!");
  }

});

} // End Movies








// function doWhat()
// {

// logCmd();
// } // End Do what I say 




function spotReq(arg) {

if (nullArg){
    song="The Sign";
 }

var aSong=arg; // The Argument is now a song

 spotify.search({ type:'track', query:aSong}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 var artist = data.tracks.items[0].album.artists[0].name;
 var song = data.tracks.items[0].name;
 var lnkUrl = data.tracks.items[0].album.artists[0].external_urls.spotify;
 var album = data.tracks.items[0].album.name
 var output = 'The song: '+song+' is by '+artist+' and is from the album: '+album+'\n Here is a preview link..\n'+lnkUrl;
        console.log(output);

  });

} 


function argPar(){
// Parses command line arguements
var c=fullArg[0]; // Get the command
var a=fullArg[1]; // Get the arguments
var t=a; 

if (a === null) {
    nullArg=true; // No arguments to pass
    return [c,a];
}
else {
    a=t.join(' '); // Returns one contigous argument 
     return [c,a]; // Returns Command and Argument
 }

} //


// function logCmd()
// {

// // Logfile - logFile 



// } // Log commmands



// function twitter(){

// logCmd();
// }// Twitter read/write







