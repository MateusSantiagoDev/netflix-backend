import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateNetflixDto {
    @IsUUID()
    @ApiProperty({
        description: "ID do usuário que está Adicionando um filme aos favorito",
        example: "7b6ca89d-29be-48ab-977c-6b3c7d03d70e",
    })
    userId: string;

    @IsUUID()
    @ApiProperty({
        description: "ID do filme que esta disponivel no catálogo",
        example: "1356c762-0c2c-4310-acb5-ba681b72cb3e",
    })
    movieId: string;
}
