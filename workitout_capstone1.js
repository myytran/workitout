const ytURL= 'https://www.googleapis.com/youtube/v3/search';

const params = {
  'part': 'snippet',
  'key':'AIzaSyB2GqU6ctQPiYz9131aSb6w1_AZCXmZV_A',
  'q': 'workouts',
  'maxResults': 50,
  'nextpageToken':'CDIQAA' //nextPageToken
}

let results;

$(document).ready(function() {
  $('.search').click(function(e) {

    var query = $('.query').val();
    params.q= query;
    searchYouTube();
  });

  $('.randomize').click(function(){
    pickRandomVideo();
  });
});

function searchYouTube() {
  $.getJSON(ytURL,params,function(data){

    results = data;
    pickRandomVideo();

  });
}

function pickRandomVideo(){
   $('.results').html('');
  var ran = Math.floor(Math.random() * results.items.length) + 1;
    //for(var i=0; i<data.items.length; i++)  {
      $('.results').append('<p><h2>'+results.items[ran].snippet.title+'</h2>');
      $('.results').append('<img src="'+results.items[ran].snippet.thumbnails.high.url+'"/></p>');
    //}
  // remove the results.items[ran];
  // if the length of results when you call this function is 0 then we need to call the next page of the API results
  // using nextPageToken
}
