import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { exceptionhandling } from 'src/utils/exceptions/exceptionhandling';
import { NetflixEntity } from './entities/netflix.entity';
import { NetflixService } from './netflix.service';

@ApiTags('Netflix')
@Controller('netflix')
export class NetflixController {
  constructor(private readonly service: NetflixService) {}

  @ApiOperation({
    summary: 'Visualizar todos os filmes',
  })
  @Get()
  async findAll(): Promise<NetflixEntity[]> {
    try {
      return await this.service.findAll();
    } catch (err) {
      exceptionhandling(err);
    }
  }

  @ApiOperation({
    summary: 'Buscar um filme pelo ID',
  })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NetflixEntity> {
    try {
      return await this.service.findOne(id);
    } catch (err) {
      exceptionhandling(err);
    }
  }
}
