import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");
import { app } from "../app";

chai.use(chaiHttp);

const { expect } = chai;


describe('Testa se a rota GET de leaderboard...', () => {

  it('retorna status 200 para o ranking da home', async () => {
    const response = await chai.request(app).get('/leaderboard/home');

    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('array');
  });
});