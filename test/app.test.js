const expect = require('chai').expect;
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
});

describe(`GET /pokemon`, () => {
    it(`Get the list pokemon`, () => {
        return request(app)
            .get('/pokemon')
            .expect(200);
    })
})