import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/modules/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('sign up new user', () => {
    const email = 'thang@gmail.com';

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        username: 'hello123',
        email,
        password: 'mypassword'
      })
      .expect(201)
      .then((res) => {
        const { username, email } = res.body || {};
        expect(username).toBeDefined();
        expect(email).toEqual(email);
      });
  });

  it('sign up new user and get user info', async () => {
    const email = 'hello123@gmail.com';

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        username: 'hello12345',
        email,
        password: 'mypassword'
      })
      .expect(201)
      .then((res) => {
        const { username, email } = res.body || {};
        expect(username).toBeDefined();
        expect(email).toEqual(email);
        return res;
      });

    const cookie = res.get('Set-Cookie');

    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);

    expect(body.email).toEqual(email);
  });
});
