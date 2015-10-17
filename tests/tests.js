var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var expect = chai.expect;
var app = server.listener;


chai.use(chaiHttp);

describe('User Route Tests', function() {
  beforeEach(function(done) {
    done();
  });

  afterEach(function(done) {
    done();
  });

  it('/api/todos - should return hello', function(done) {

    var hello = {'message':'Hello'};
    chai.request(app)
      .post('/api/todos')
      .send(hello)
      .end(function(err, res) {
        res.should.have.status(200);
        console.log(res.body);
        expect(res.body).to.equal('Hello');
        done();
      });
  });

});