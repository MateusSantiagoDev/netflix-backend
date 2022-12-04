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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
    summary: 'vizualizar todos os usuários',
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
    summary: 'Cadastrar um novo usuário',
  })
  @Post()
  create(@Body() dto: CreateUserDto) {
    try {
      return this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um usuário pelo ID',
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
    summary: 'Editar um usuário pelo ID',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    try {
      return this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Remover um usuário pelo ID',
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
