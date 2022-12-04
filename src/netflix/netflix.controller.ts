import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NetflixService } from './netflix.service';

@ApiTags('Netflix')
@Controller('netflix')
export class NetflixController {
  constructor(private readonly service: NetflixService) {}

  @ApiOperation({
    summary: 'Visualizar todos os filmes',
  })
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
