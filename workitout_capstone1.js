const ytURL= 'https://www.googleapis.com/youtube/v3/search'; // API key

const params = { //parameters in object
  'part': 'snippet',
  'key':'AIzaSyB2GqU6ctQPiYz9131aSb6w1_AZCXmZV_A',
  'type': 'video',
  'q': 'workouts',
  'maxResults': 50,
  'ID':0 //nextPageToken, need to call for next page so 50 results don't repeat
}

$(document).ready(function() {
  $('.search-form').submit(function(e) {
    e.preventDefault();
    var query = $('.query').val();
    params.q= query + " workout";
    searchYouTube();
    $('.query').val(''); //clears out query after searchYouTube runs
  });

  $('.randomize').click(function(){
    pickRandomVideo();
  });
});

/*$('#play-video').on('click', function(ev) {

   $("#video")[0].src += "&autoplay=1";
   ev.preventDefault();

 });
*/
function searchYouTube() {
  $.getJSON(ytURL,params,function(data){

    results = data;
    pickRandomVideo();

  });
};




function pickRandomVideo(){
   $('.results').html('');
   if(results.items.length>0){
      var ran = Math.floor(Math.random() * results.items.length) + 1;


        /*  $('.results').append('<p><h2>'+results.items[ran].snippet.title+'</h2>');
          $('.results').append('<img src="'+results.items[ran].snippet.thumbnails.high.url+'"/></p>');*/
        $('.results').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+results.items[ran].id.videoId+'?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');

        results.items.splice(ran,1);
      } else {
        $('.results').html('<h2>Sorry, you have run out of options, try a new search</h2>');
      }
}

/*<div class="youtubeVid">' +
  results.snippet.title +  '<br/>' +
  '<a href="https://www.youtube.com/watch?v=' +
  value.id.videoId +
  '"><img class="youtubeVid" src="' +
  results.items[ran].snippet.thumbnails.high.url+ '"></a>' + '<br/>' +
  results.items[ran].snippet.description + '</li>'*/
