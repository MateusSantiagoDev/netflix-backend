import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AdminRepository } from './admin.repository';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateadminDto } from './dto/update-admin.dto';
import { AdminEntity } from './entities/admin.entity';

@Injectable()
export class AdminService {
  admins: AdminEntity[] = [];

  constructor(private readonly repository: AdminRepository) {}

  findAll() {
    return this.admins;
  }

  create(dto: CreateAdminDto) {
    const adm = { ...dto, id: randomUUID() };
    this.admins.push(adm);
  }

  findOne(id: string) {
    const adm = this.admins.find((el) => el.id === id);
    return adm;
  }

  update(id: string, dto: UpdateadminDto) {
    this.admins.map((el, index) => {
      if (el.id === id) {
        const adm = Object.assign(el, dto);
        return this.admins.splice(index, 1, adm);
      }
    });
    const data = this.admins.find((el) => el.id === id);
    return data;
  }
}
