var Twitter = require('twitter')
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
})

const tagName = 'Hellocal'

client.stream('statuses/filter', {track: tagName}, function(stream) {
  stream.on('data', function(event) {
    console.log(event && event.text);
  })
  
  stream.on('error', function(error) {
    throw error;
  })
});