import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from "class-validator";

export class CreateMovieDto {
  @IsString()
  @ApiProperty({
    description: "Titulo do filme",
    example: "Piratas do caribe"
  })
  title: string;

  @IsString()
  @ApiProperty({
    description: "Descrição do filme",
    example: "Filme de aventura"
  })
  description: string;

  @IsUrl()
  @ApiProperty({
    description: "Imagem do filme",
    example: "https://www.sociedadenerd.com.br/wp-content/uploads/2021/09/piratas-do-caribe-ordem-para-assistir.jpg"
  })
  image: string;
}
