import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  users: UserEntity[] = [];

  constructor(private readonly repository: UserRepository) {}

  findAll() {
    return this.users;
  }

  create(dto: CreateUserDto) {
    const user = { ...dto, id: randomUUID() };
    this.users.push(user);
  }

  findOne(id: string) {
    const user = this.users.find((el) => el.id === id);
    return user;
  }

  update(id: string, dto: UpdateUserDto) {
    this.users.map((el, index) => {
      if (el.id === id) {
        const data = Object.assign(el, dto);
        this.users.splice(index, 1, data);
      }
    });
    const user = this.users.find((el) => el.id === id);
    return user;
  }

  delete(id: string) {
    const user = this.users.map((el, index) => {
      if (el.id === id) {
        return this.users.splice(index, 1);
      }
    });
  }
}
