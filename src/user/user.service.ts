import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  users: UserEntity[] = [];

  constructor(private readonly repository: UserRepository) {}

  findAll() {
    try {
      return this.users;
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  create(dto: CreateUserDto) {
    try {
      const user = { ...dto, id: randomUUID() };
      this.users.push(user);
    } catch (err) {
      throw new Exceptions(Exception.InvalidData);
    }
  }

  findOne(id: string) {
    try {
      return this.users.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  update(id: string, dto: UpdateUserDto) {
    try {
      this.users.map((el, index) => {
        if (el.id === id) {
          const data = Object.assign(el, dto);
          this.users.splice(index, 1, data);
        }
      });
      return this.users.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  delete(id: string) {
    try {
      this.users.map((el, index) => {
        if (el.id === id) {
          return this.users.splice(index, 1);
        }
      });
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
