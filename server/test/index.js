import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

// Should Assertion
let should = chai.should();
chai.use(chaiHttp);

describe("Index APIs", () => {
  describe("Test Get route /api/expenses", () => {cc
    it("It should return all expenses", (done) => {
      chai
        .request(server)
        .get("/api/expenses")
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.not.be.eql(0);
          done();
        });
    });

    it("It should not return all the tasks", (done) => {
      chai
        .request(server)
        .get("/api/expenses")
        .end((error, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });

  // describe("POST /api/expenses", () => {
  //   it("It should POST a new expenses", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/expenses")
  //       .end((err, response) => {
  //         response.should.have.status(201);
  //         response.body.should.be.a("object");
  //         done();
  //       });
  //   });

  //   it("It should NOT POST a new Expense ", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/expenses")
  //       .end((err, response) => {
  //         response.should.have.status(400);
  //         done();
  //       });
  //   });
  // });
});
