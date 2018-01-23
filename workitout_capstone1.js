const ytURL= 'https://www.googleapis.com/youtube/v3/search'; // API key

const params = { //parameters in object
  'part': 'snippet',
  'key':'AIzaSyB2GqU6ctQPiYz9131aSb6w1_AZCXmZV_A',
  'q': 'workouts',
  'maxResults': 50,
  'nextpageToken':'CDIQAA' //nextPageToken, need to call for next page so 50 results don't repeat
}

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
};

function pickRandomVideo(){
   $('.results').html('');
  var ran = Math.floor(Math.random() * results.items.length) + 1;


      $('.results').append('<p><h2>'+results.items[ran].snippet.title+'</h2>');
      $('.results').append('<img src="'+results.items[ran].snippet.thumbnails.high.url+'"/></p>');


}
