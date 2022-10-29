import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");
import { app } from "../app";
import {
  loginSuccess,
  loginFailure,
  emptyFields,
  incorrectEmail,
  incorrectFields,
  incorrectPassword,
} from "./mocks/loginMocks";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testa se rota POST de login...", () => {
  it("retorna status 400", async () => {
    const response = await chai.request(app).post("/login").send(loginFailure);

    expect(response.status).to.be.eq(400);
    expect(response.body).to.have.property("message");
    expect(response.body).to.deep.eq(emptyFields);
  });

  it("retorna status 401 ao usar email errado", async () => {
    const response = await chai
      .request(app)
      .post("/login")
      .send(incorrectEmail);

    expect(response.status).to.be.eq(401);
    expect(response.body).to.have.property("message");
    expect(response.body).to.deep.eq(incorrectFields);
  });

  it("retorna status 401 ao usar senha errada", async () => {
    const response = await chai
      .request(app)
      .post("/login")
      .send(incorrectPassword);

    expect(response.status).to.be.eq(401);
    expect(response.body).to.have.property("message");
    expect(response.body).to.deep.eq(incorrectFields);
  });

  it("retorna status 200", async () => {
    const response = await chai.request(app).post("/login").send(loginSuccess);

    expect(response.status).to.be.eq(200);
    expect(response.body).to.have.property("token");
  });
});

describe("Testa se rota GET de validação de token...", () => {
  it("retorna status 401 ao não enviar token", async () => {
    const response = await chai.request(app).get("/login/validate");

    expect(response.status).to.be.eq(401);
    expect(response.body).to.have.property("message");
    expect(response.body).to.deep.eq({ message: "Token not found" });
  });

  it("retorna status 200 ao enviar token válido", async () => {
    const response = await chai.request(app).post("/login").send(loginSuccess);
    const token = response.body.token;
    const response2 = await chai
      .request(app)
      .get("/login/validate")
      .set("authorization", token);

    expect(response2.status).to.be.eq(200);
    expect(response2.body).to.have.property("role");
    expect(response2.body).to.deep.eq({ role: "admin" });
  });
});
