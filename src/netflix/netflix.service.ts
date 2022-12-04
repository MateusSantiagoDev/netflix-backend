import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { NetflixEntity } from './entities/netflix.entity';
import { NetflixRepository } from './netflix.repository';

@Injectable()
export class NetflixService {
  netflix: NetflixEntity[] = [];

  constructor(private readonly repository: NetflixRepository) {}

  findAll() {
    try {
      return this.netflix;
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  findOne(id: string) {
    try {
      return this.netflix.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
