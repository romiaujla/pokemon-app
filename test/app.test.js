const expect = require('chai');
const request = require('supertest');
const app = require('../app');

describe(`GET /types`, () => {
    it(`Return an array of types of pokemon`, () => {
        return request(app)
            .get('/types')
            .expect(200)
            .then((res) => {
                expect(res.body).to.be.an('array');
                expect(res.body.length >= 1).to.be.true;
            })
    })
})