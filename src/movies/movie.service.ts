import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Exceptions } from 'src/utils/exceptions/exceptionClass';
import { Exception } from 'src/utils/exceptions/exceptions';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieEntity } from './entities/movie.entity';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
  movies: MovieEntity[] = [];
  constructor(private readonly repository: MovieRepository) {}

  findAll(): MovieEntity[] {
    try {
      return this.movies;
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  create(dto: CreateMovieDto) {
    try {
      const movie: MovieEntity = { ...dto, id: randomUUID() };
      this.movies.push(movie);
    } catch (err) {
      throw new Exceptions(Exception.InvalidData);
    }
  }

  findOne(id: string) {
    try {
      return this.movies.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }

  update(id: string, dto: UpdateMovieDto) {
    try {
      this.movies.map((el, index) => {
        if (el.id === id) {
          const data = Object.assign(el, dto);
          this.movies.splice(index, 1, data);
        }
      });
      return this.movies.find((el) => el.id === id);
    } catch (err) {
      throw new Exceptions(Exception.UnprocessableEntityException);
    }
  }

  delete(id: string) {
    try {
      this.movies.map((el, index) => {
        if (el.id === id) {
          return this.movies.splice(index, 1);
        }
      });
    } catch (err) {
      throw new Exceptions(Exception.NotFoundException);
    }
  }
}
