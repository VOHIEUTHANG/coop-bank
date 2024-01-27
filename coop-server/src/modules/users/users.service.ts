import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(username: string) {
    const user = await this.repo.findOneBy({ username });
    return user;
  }

  find(filter: FindOptionsWhere<User>) {
    return this.repo.findBy(filter);
  }

  async update(username: string, attrs: Partial<User>) {
    const user = await this.repo.findOneBy({ username });
    if (!user) {
      throw new NotFoundException(`User ${username} not found !`);
    }

    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(username: string) {
    const user = await this.repo.findOneBy({ username });
    if (!user) {
      throw new NotFoundException(`User ${username} not found !`);
    }
    return this.repo.remove(user);
  }
}
