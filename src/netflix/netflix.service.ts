import { Injectable } from '@nestjs/common';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { NetflixEntity } from './entities/netflix.entity';
import { NetflixRepository } from './netflix.repository';

@Injectable()
export class NetflixService {
  constructor(private readonly repository: NetflixRepository) {}

  async findAll(): Promise<NetflixEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  async findOne(id: string): Promise<NetflixEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
