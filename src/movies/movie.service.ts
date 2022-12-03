import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { MovieEntity } from "./entities/movie.entity";
import { MovieRepository } from "./movie.repository";

@Injectable()
export class MovieService {    
    
    movies: MovieEntity[] = []
    constructor(private readonly repository: MovieRepository) {}

    findAll(){
        return this.movies;
    }

    create(dto: CreateMovieDto) {
        const movie = { ...dto, id: randomUUID() }
        this.movies.push(movie)
    }

    findOne(id: string) {
        const movie = this.movies.map( el =>{
           if(el.id === id) {
           return el
           }
        })
        return movie
    }  

    update(id: string, dto: UpdateMovieDto) {
        const movie = this.movies.map((el, index) => {
            if(el.id === id) {
               return this.movies.splice(index, 1, dto)
            }
        })
        return movie
    }  
    
    
}