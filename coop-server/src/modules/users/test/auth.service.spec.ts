it('can create an instance of AuthSErvice', async () => {});
import { BadRequestException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';
import { User } from '../users.entity';
import { CreateUserDto } from '../dto/create-user.dto';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Create a fake copy of the users service
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: ({ username, email, password }: CreateUserDto) =>
        Promise.resolve({ username, email, password } as User)
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService
        }
      ]
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('creates a new user with a salted and hashed password', async () => {
    const user = await service.signup({
      username: 'testing123',
      email: 'foo@bar.com',
      password: '1123'
    });

    expect(user.password).not.toEqual('asdf');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([{ username: '12313', email: '123@gmail.com', password: '1123' } as User]);

    await expect(
      service.signup({ username: '123', email: '222@gmail.com', password: '123' })
    ).rejects.toThrow(BadRequestException);
  });
});
