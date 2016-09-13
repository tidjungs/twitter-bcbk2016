import io from 'socket.io-client';
import {expect} from 'chai';
var socketURL = 'http://localhost:5000';
var options ={
  transports: ['polling'],
  'force new connection': true
};
var chatUser1 = {'name':'Tom'};
describe('test socketio', (done) => {
  it('Should broadcast new user to all users', (done) => {
    
    var client1 = io.connect(socketURL, options);
    client1.on('connect', function(data){
      client1.emit('connection name', chatUser1);
      
      client1.on('new user', function(usersName){
        expect(usersName).to.equal(chatUser1.name + " has joined.");
        client1.disconnect();
        done()
      });
      
    });

  });
});