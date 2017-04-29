// Liri Homework 
//  Resource setup - Twitter Keys, Node Packages, 

// var client = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });

// Requirements 
var logFile = require("fs");         // Output to logfile
var ranDom  = require("fs");         // Input from "Random" file
// var twitter = require('twitter'); // Twitter // 
var spotify = require('spotify');    // Spotify
var request = require("request");    // OMDB - movie query 
var fullArg = process.argv.slice(2); // Strip System String
var nullArg = false;                 // Flag for missing arguements
var commArg = argPar();
var commAnd = commArg[0];
var argUmnt = commArg[1];


function caseCommander () {
      switch(commAnd) {

              case 'my-tweets':
              break;

              case 'spotify-this-song':
              spotReq(argUmnt);
              logCmd(commAnd,argUmnt);
              break;

              case 'movie-this':
              movie(argUmnt);
              logCmd(commAnd,argUmnt);
              break;

              case 'do-what-it-says':
              doWhatItSays();       // Logging to take place within the function because it's pseudo-recursive
              break;

              default:
              console.log('I did not understand that ',commAnd);
      }

} //  One function to rule them all


function argPar(){
// Parses command line arguements
    var c=fullArg[0]; // Get the command
    a=fullArg.slice(1);
    var tempO=a; 

      if (a === null) {
          nullArg=true; // No arguments to pass
          return [c,a];
      }
      else {
         console.log(typeof(tempO));
          a=tempO.join(' '); // Returns one contiguous argument 
           return [c,a]; // Returns Command and Argument
       }
} //

function logCmd(c, a) {
var enTry = "\n--------------" + "\n" + c + " : " + a +"\n----------------"
    logFile.appendFile("logs.txt", enTry , function(err) {
     //if an error occurs
      if (err) {
        console.log(err);
      }
      else {
        console.log("Log entry added.");
      }
    });
} // Log commmands & Arguments


function movie(mov)
{

  var movName = mov;
    if (movName === null) {
        movName="Mr. Nobody";
    }

var queryUrl = "http://www.omdbapi.com/?t=" + movName + "&y=&plot=short&r=json&tomatoes=true";
request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {
        var mYear     = JSON.parse(body).Year;
        var mTitle    = JSON.parse(body).Title;
        var mRating   = JSON.parse(body).Title;
        var mCountry  = JSON.parse(body).Country;
        var mLanguage = JSON.parse(body).Language;
        var mPlot     = JSON.parse(body).Plot;
        var mActors   = JSON.parse(body).Actors;
        var mUrl      = JSON.parse(body).tomatoURL;

        var outPut1   =  'The movie: '+mTitle+' was released in '+mYear+' and was filmed in '+mCountry+".";      
        var outPut2   =  'Starring: '+mActors+'.'; 
        var outPut3   =   mPlot;
        var outPut4   =  'The URL is: '+mUrl+'.';

        console.log(outPut1);
        console.log(outPut2);
        console.log(outPut3);
        console.log(outPut4);
    }
  
  else {
    console.log("Sorry, I don't know that movie!");
  }

});

} // End Movies


function spotReq(arg) {
  if (nullArg){
    var aSong="The Sign";
    }
  else {
    var aSong=arg; // The Argument is now a song
    }

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
} // Spottify 

function doWhatItSays(){
ranDom.readFile('random.txt', "utf8", function (err, data) {
    if (err) {
    throw err;
    console.log(data('utf8'));
    }
    else {
    
        fullArg = data.replace(/"/g,""); // Strip Quotes and Comma 
        var n = fullArg.indexOf(",");
        commAnd = fullArg.slice(0,n);
        argUmnt = fullArg.slice(n+1,fullArg.length);
        spotReq(argUmnt);
        logCmd("doWhatItSays"+commAnd,argUmnt);     // Log the command 
        nullArg = false;                    // Flag for missing arguements
        console.log("The Command is ", commAnd, "The Argument is: ", argUmnt,  "fullArg = ",fullArg);
        caseCommander();                    // Re-run with new variables 
    }

// function parseAdd(x) {
// var y = x;
// x = y.replace(/,|"/g," ");
// return x;
// }
});


// Read command 
// run the parser 
// Log the command 
// Call the case commander 

} // End DO what it Says



function myTweets() {
} // End 

caseCommander();











