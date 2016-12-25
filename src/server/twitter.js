const config = require('config');
const twitter = require('twitter');

module.exports = () => {
  
  const io = require('socket.io').listen(5000);
  
  io.sockets.on('connection', function (socket) {
    io.sockets.emit('connect new user', socket.id);
  });
  
  var client = new twitter({
    consumer_key: config.COMSUMER_KEY,
    consumer_secret: config.CONSUMER_SECRET,
    access_token_key: config.ACCESS_TOKEN,
    access_token_secret: config.ACCESS_TOKEN_SECRET
  });

  const tagName = '#ywc14';

  client.stream('statuses/filter', { track: tagName }, (stream) => {
    stream.on('data', (event) => {
      io.sockets.emit('new tweet', event);
    });
    stream.on('error', (error) => {
      throw error;
    });

    console.log(`start steaming tag ${tagName}`);
  });
}

