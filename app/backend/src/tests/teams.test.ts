import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");
import { app } from "../app";

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa se rota GET de Teams...', () => { 
  it('retorna status 200', async () => { 
    const response = await chai.request(app).get('/teams'); 

    expect(response.status).to.be.eq(200); 
    expect(response.body).to.be.an('array'); 
  }); 

  it('retorna status 200 ao enviar id', async () => {
    const response = await chai.request(app).get('/teams/1');

    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('object');
  });
});