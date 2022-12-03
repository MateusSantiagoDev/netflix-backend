import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieService } from './movie.service';

@ApiTags("Movies")
@Controller('movies')
export class MovieController {
  constructor(private readonly service: MovieService) {}

  @ApiOperation({
    summary: 'visualizar todos os filmes',
  })
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiOperation({
    summary: 'Adicionar um filme',
  })
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.service.create(dto);
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.service.findOne(id)
  }

}
