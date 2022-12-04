import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateadminDto } from './dto/update-admin.dto';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService) {}

  @ApiOperation({
    summary: 'Vizualizar todos os adminitradores',
  })
  @Get()
  findAll() {
    try {
      return this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Adicionar um novo administrador',
  })
  @Post()
  create(@Body() dto: CreateAdminDto) {
    try {
      return this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um administrador pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Editar um administrador pelo ID',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateadminDto) {
    try {
      return this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover um Administrador pelo ID',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      this.service.delete(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
