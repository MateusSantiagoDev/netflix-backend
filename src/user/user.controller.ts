import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
     summary: "vizualizar todos os usuários"
  })
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiOperation({
    summary: "Cadastrar um novo usuário"
  })
  @Post()
  create(@Body() dto: CreateUserDto) {
     return this.service.create(dto)
  }

  @ApiOperation({
    summary: "Buscar um usuário pelo ID"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id)
  }

  @ApiOperation({
    summary: "Editar um usuário pelo ID"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.service.update(id, dto)
  }
}
