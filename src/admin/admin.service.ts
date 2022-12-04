import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { AdminRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateadminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';

@Injectable()
export class AdminService {
  admins: AdminEntity[] = [];

  constructor(private readonly repository: AdminRepository) {}

  findAll() {
    try {
      return this.admins;
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  create(dto: CreateAdminDto) {
    try {
      const adm = { ...dto, id: randomUUID() };
      this.admins.push(adm);
    } catch (err) {
      throw new Exceptions(Exception.InvalidData);
    }
  }

  findOne(id: string) {
    try {
      return this.admins.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  update(id: string, dto: UpdateadminDto) {
    try {
      this.admins.map((el, index) => {
        if (el.id === id) {
          const adm = Object.assign(el, dto);
          return this.admins.splice(index, 1, adm);
        }
      });
      return this.admins.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  delete(id: string) {
    try {
      this.admins.map((el, index) => {
        if (el.id === id) {
          this.admins.splice(index, 1);
        }
      });
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
