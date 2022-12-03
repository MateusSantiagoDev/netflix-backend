import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateMovieDto } from "./dto/create-movie.dto";
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
}