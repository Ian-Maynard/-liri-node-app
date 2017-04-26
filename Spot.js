// var spotify = require('spotify')

var spotify = require('spotify');
var nullArg= false;
var nodeArgs = process.argv.slice(2); // Strip system string



var song = argPar(nodeArgs); // Strip and parse song from arguement list
if (nullArg){
    song="The Sign";
}


 spotify.search({ type:'track', query:song}, function(err, data) {
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


     // var artArr = [];
     //    for (var i=0; i < spdata.tracks.items[i].artists.length; i++) {
     //        artArr.push(spdata.tracks.items[i].artists[i].name);
     //       }
     //    console.log(artArr.join(', '));   
     //    console.log(spdata.tracks.items.artists.length)
 // console.log("Artist: " + JSON.parse(spdata.tracks.name);
 //    console.log("Song: " + JSON.parse(data).Title);
 //    console.log("Album: " + JSON.parse(data).Value);
 //    console.log("Song Link: " + JSON.parse(data).Country);
 //    console.log("Covered by: " + JSON.parse(data).Language);
  });



function argPar(s){
// Parses command line arguements
var stArgZ=s.slice(1);  // Remove command switch
// console.log('during argpar ',stArgZ,'   ',stArgZ.length,'  ',s.length);
    if (stArgZ.length === 0){
    nullArg=true; // Sets null arguement to yes allowing defaults to be selected
    return stArgZ;          
    }
     stArgZ=stArgZ.join(' ');
     return stArgZ;
} // 



// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to
// "The Sign" by Ace of Base