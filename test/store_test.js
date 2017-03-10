var expect  = require("chai").expect;
var request = require("request");

describe("Store APIs", function() {
  describe("List All Stores", function() {
    it("returns status 200", function(done) {
      request("http://localhost:3000/stores", function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});