import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieService } from './movie.service';

@ApiTags('Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @ApiOperation({
    summary: 'visualizar todos os filmes',
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
    summary: 'Adicionar um filme',
  })
  @Post()
  create(@Body() dto: CreateMovieDto) {
    try {
      return this.service.create(dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
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
    summary: 'Editar um filme pelo ID',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMovieDto) {
    try {
      return this.service.update(id, dto);
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'remover um filme pelo ID',
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
