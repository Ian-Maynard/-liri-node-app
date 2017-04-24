
// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);

// Adds two command line arguments (numbers).
// console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
// Liri Homework 


//  Resource setup 


 
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
var logFile = require("fs");        // Output to logfile
var twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");   // OMDB - movie query 



var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";





    
switch(process.argv[3]) {

        case 'my-tweets':
            ;
       
        break;

        case 'spotify-this-song':
        
        break;

        case 'movie-this':
        
        break;

		case 'do-what-it-says':
       
        break;

        default:
        console.log('I did not understand that');
        break;
}



function logCmd()
{

// Logfile - logFile 



} // Log commmands



function twitter(){

logCmd();
}// Twitter read/write


function movie()
{

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

logCmd();
} // Movies


function doWhat()
{

logCmd();
} // Do what I say 


function spotify()
{

    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});

logToTxt();
} // Spotify read/write









