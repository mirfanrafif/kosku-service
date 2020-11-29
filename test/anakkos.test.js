var assert = require("assert");
const { expect } = require("chai");
var chai = require("chai"),
  chaiHttp = require("chai-http");
chai.use(chaiHttp);
var app = "http://localhost:3000";

describe("anak kos", () => {
  it("get anak kos data", async () => {
    chai
      .request(app)
      .get("/anakkos")
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res).to.have.status(200);
      });
  });

  it("get anak kos by id", () => {
    chai
      .request(app)
      .get("/anakkos/1")
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res).to.have.status(200);
      });
  });

  it("store data anak kos", () => {
    chai
      .request(app)
      .post("/anakkos")
      .send({
        nama: "Irfan Rafif",
        asal: "Malang",
        nohp: "02832383019",
      })
      .end((err, res) => {
        expect(res).to.be.json;
        expect(res).to.have.status(200);
      });
  });
});
