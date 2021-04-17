const { assert } = require('chai');
const chai = require('chai');
const nock = require('nock');
//const request = require('supertest');
const localApp = require('../helloworld');
//const expressApp = require('../app');

describe('GET /', function () {

   //This is testing local code
    it ('Updating Incoming requests', () => {
      const result = localApp.updateRequest ("DBSave:","Backend Layer")
      chai.assert.equal (result, "DBSave:Backend Layer")
    })
    

  //  //This is testing Express app code
  // it('responds with home page', function (done) {
  //   // //specify the url to be intercepted
  //   // nock("http://localhost:3000")
  //   //   //define the method to be intercepted
  //   //   .get('/events')
  //   //   //respond with a OK and the specified JSON response
  //   //   .reply(200, {
  //   //     "status": 200,
  //   //     "events": [
  //   //       { "title": 'an event', "id": 1234, "description": 'something really cool' },
  //   //       { "title": 'another event', id: 5678, "description": 'something even cooler' }
  //   //     ]
  //   //   });

  //   // request("http://localhost:3000")
  //   //   .get('/')
  //   //   .expect('Content-Type', /html/)
  //   //   .expect(200)
  //   //   .end((err, res) => {
  //   //     if (err) {
  //   //       return done(err);
  //   //     }
  //   //     chai.assert.isTrue(res.text.includes("<h1>Taskme DB RestAPI</h1>"));
      
  //   //     return done();
  //   //   });

  // });


  // it('should display page when the backend is down', function (done) {
  //   //specify the url to be intercepted
  //   nock("http://localhost:3000")
  //     //define the method to be intercepted
  //     .get('/events')
  //     //respond with an error
  //     .replyWithError("Error");

  //   chai.request(app)
  //     .get('/')
  //     .expect('Content-Type', /html/)
  //     .expect(200)
  //     .end((err, res) => {
  //       if (err) {
  //         return done(err);
  //       }
  //       chai.assert.isTrue(res.text.includes("Error"));
  //       return done();
  //     });
  // });

});


// describe('POST /event', function () {
//   it('adds an event', function (done) {
//   const data = { title: 'test event', description: 'even cooler test' };
//     //specify the url to be intercepted
//     nock("http://localhost:8082")
//       //define the method to be intercepted
//       .post('/event')
//       //respond with a OK and the specified JSON response
//       .reply(200, {
//         "status": 200,
//         "events": [
//           { title: 'an event', id: 1, description: 'something really cool' },
//           { title: 'another event', id: 2, description: 'something even cooler' },
//           data
//         ]
//       });

//     chai.request(app)
//       .post('/event')
//       .expect(302)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//         chai.assert.isTrue(res.text.includes("Redirecting"));
//         return done();
//       });
//   });
// });




