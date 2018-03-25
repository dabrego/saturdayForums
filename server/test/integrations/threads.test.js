const chai = require ('chai');

const request = require ('supertest');



const mongooseHelper = require('./mongooseHelper');

const fixtures = require('./fixtures');

const app = require('../../src/app');




const expect = chai.expect;



describe('Threads endpoints', () => {


      // before( async () => await mongooseHelper.connectToDatabase());

      // after(async () => await mongooseHelper.closeConnection());



   describe('when calling GET /threads', () => {


      before(async () => await fixtures.seedThreads());

      after(async () => await mongooseHelper.dropDatabase());


      it('returns a list of threads', () => {

         return request(app).get('/threads')

         .expect('Content-Type', /json/)

         .expect(200)

         .then(response => {

            const { body } = response;

            expect(body.data).to.have.length(2);

            expect(body.data[0].title).to.equal('El sistema de matricula esta dañado');

            expect(body.data[1].title).to.equal('El problema de transporte en Panama');

         });

      });


      xit('returns an empty array if there are no threads', () => {


      });

   });


   describe('when calling POST /threads', () => {

      xit('creates a new threads', () =>{


      });



      xit('returns HTTP code 400 if invalid params are sent', () =>{


      });

   });

});



