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

  it('/ (GET)', () => {
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
});
