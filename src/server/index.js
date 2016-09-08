const config = require('configs');
const Twitter = require('twitter')

var client = new Twitter({
  consumer_key: config.COMSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token_key: config.ACCESS_TOKEN,
  access_token_secret: config.ACCESS_TOKEN_SECRET
})

const tagName = 'komcal'

client.stream('statuses/filter', {track: tagName}, (stream) => {
  stream.on('data', function(event) {
    console.log(event && event.text);
  })
  
  stream.on('error', (error) => {
    throw error;
  })
});