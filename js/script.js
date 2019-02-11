/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Twerk","Startender","Thotiana"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links =["https://static.spin.com/files/2019/01/city-girls-card-b-twerk-video-1547671528-640x431.jpg",
"https://cps-static.rovicorp.com/3/JPG_400/MI0004/625/MI0004625372.jpg?partner=allrovi.com"
,"https://pbs.twimg.com/profile_images/1049931791899844608/esnDJeH9_400x400.jpg"]
var  artists = ["City Girls","A boogie wit a hoodie","Blueface"];
var songlengths =["2:47","3:13","2:10"];
var songLinks = [
"https://www.youtube.com/watch?v=QryoOF5jEbc",
"https://www.youtube.com/watch?v=DEoAbqwmZro"
,"https://www.youtube.com/watch?v=v_qFfgTYdSo"]
function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(songs){
    $('#songs').append("<p>" + songs + "</p>")
});
}
images_links.forEach(function(images_links){
   $('#images_links').append("<p>" +images_links+ "</p>")
});
artists.forEach(function(artists){
   $('#artists').append("<p>" +artists+ "</p>")
});
songlengths.forEach(function(songlengths){
   $('#songlengths').append("<p>" + songlengths +"</p>")
});
songLinks.forEach(function(songLinks){
   $('#songLinks').append("<a href='" +songLinks+"'>")
});

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
