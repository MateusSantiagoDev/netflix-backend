import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
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
}
