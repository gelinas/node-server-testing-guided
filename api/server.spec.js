const request = require('supertest');

const server = require('./server.js');

it("it should set db environment to testing", function () {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server", function() {
  describe("GET", function () {
    it("should return 200 OK", function () {
      // run the server
      // make a GET request to /
      return request(server)
        .get("/")
        .then(res => {
          // see that the http code response is 200
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function () {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i)
        })
    })
  });
});

// the endpoint returns the correct http status code based on input
// the endpoint returns the right data format (json in our case)
// the endpoint returns the right data in the body based on input