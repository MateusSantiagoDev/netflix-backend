import { Controller } from "@nestjs/common";
import { MovieService } from "./movie.service";

@Controller()
export class MovieController {
    constructor(private readonly service: MovieService) {}
}