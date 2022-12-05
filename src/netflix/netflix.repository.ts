import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { NetflixEntity } from './entities/netflix.entity';

@Injectable()
export class NetflixRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<NetflixEntity[]> {
    try {
      return await this.prisma.netflix.findMany();
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }

  async findOne(id: string): Promise<NetflixEntity> {
    try {
      return await this.prisma.netflix.findFirstOrThrow({ where: { id } });
    } catch (err) {
      throw new Exceptions(Exception.DatabaseException);
    }
  }
}
