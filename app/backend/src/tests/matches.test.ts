import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");
import { app } from "../app";
import { createMatch, equalMatch, invalidTeam, token } from './mocks/matchMocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa se a rota GET de matches...', () => {
  it('retorna status 200', async () => {
    const response = await chai.request(app).get('/matches');

    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('array');
  });
  
  it('retorna partidas em progresso', async () => {   
    const response = await chai.request(app).get('/matches?inProgress=true');

    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('array');
  });

  it('retorna partidas finalizadas', async () => {
    const response = await chai.request(app).get('/matches?inProgress=false');

    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('array');
  });
});

describe('Testa se a rota POST de matches...', () => {

  it('retorna status 401 quando não há token', async () => {
    const response = await chai.request(app).post('/matches');

    expect(response.status).to.be.eq(401);
    expect(response.body.message).to.be.eq('Token not found');
  });

  it('retorna status 401 quando o token é inválido', async () => {
    const response = await chai.request(app)
    .post('/matches')
    .set('authorization', 'invalid_token');

    expect(response.status).to.be.eq(401);
    expect(response.body.message).to.be.eq('Token must be a valid token');
  });

  it('retorna status 422 para partidas com times iguais', async () => {
    const response = await chai.request(app)
    .post('/matches')
    .set('authorization', token)
    .send(equalMatch);

    expect(response.status).to.be.eq(422);
    expect(response.body.message).to.be.eq('It is not possible to create a match with two equal teams')
  });

  it('retorna status 404 para times inválidos', async () => {
    const response = await chai.request(app)
    .post('/matches')
    .set('authorization', token)
    .send(invalidTeam);

    expect(response.status).to.be.eq(404);
    expect(response.body.message).to.be.eq('There is no team with such id!')
  });

  it('retorna status 201 ao criar partida', async () => {
    const response = await chai.request(app)
    .post('/matches')
    .set('authorization', token)
    .send(createMatch);

    expect(response.status).to.be.eq(201);
    expect(response.body).to.be.an('object');
  });

  });

describe('Testa se a rota PATCH de finish matches...', () => {

  it('retorna status 200', async () => {
    const response = await chai.request(app).patch('/matches/1/finish');

    expect(response.status).to.be.eq(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.be.eq('Finished');
  });
});

describe('Testa se a rota PATCH de update matches...', () => {
  
    it('retorna status 200', async () => {
      const response = await chai.request(app).patch('/matches/1').send({ homeTeamGoals: 1, awayTeamGoals: 0 });

      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.eq('Match updated');
    });

    it('retorna erro quando não há ID', async () => {
      const response = await chai.request(app).patch('/matches').send({ homeTeamGoals: 1, awayTeamGoals: 0 });

      expect(response.status).to.be.eq(404);
    });
  });
