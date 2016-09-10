const config = require('config');
const twitter = require('twitter');

var client = new twitter({
  consumer_key: config.COMSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token_key: config.ACCESS_TOKEN,
  access_token_secret: config.ACCESS_TOKEN_SECRET
});

const tagName = 'komcal';

export default client.stream('statuses/filter', { track: tagName }, (stream) => {
  stream.on('data', (event) => {
  });
  stream.on('error', (error) => {
    throw error;
  });

  console.log(`start steaming tag #${tagName}`);
});
