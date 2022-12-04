import { Injectable } from '@nestjs/common';
import { NetflixEntity } from './entities/netflix.entity';
import { NetflixRepository } from './netflix.repository';

@Injectable()
export class NetflixService {
  netflix: NetflixEntity[] = [];

  constructor(private readonly repository: NetflixRepository) {}

  findAll() {
    return this.netflix;
  }

  findOne(id: string) {
    return this.netflix.find((el) => el.id === id);
  }
}
