import io from 'socket.io-client';
import {expect} from 'chai';
var socketURL = 'http://localhost:5000';
var options ={
  transports: ['polling'],
  'force new connection': true
};
describe('test socketio', (done) => {
  it('Should broadcast new user', (done) => {
    
    var client1 = io.connect(socketURL, options);
    client1.on('connect', function(data){
      client1.on('connect new user', function(socket){
        expect(socket).to.be.a('string');
        client1.disconnect();
        done();
      });
      client1.on('new tweet', function(data) {
        expect(data).to.be.an('object');
      });
    });

  });
});