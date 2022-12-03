import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "Nome do usuário",
    example: "Mateus Jacinto Santiago",
  })
  name: string;

  @ApiProperty({
    description: "CPF do usuário",
    example: "00000000000"
  })
  cpf: string;

  @ApiProperty({
    description: "Email do usuário",
    example: "email@email.com.br"
  })
  email: string;

  @ApiProperty({
    description: "Senha do usuário",
    example: "secret"
  })
  password: string;

  @ApiProperty({
    description: "Confirmação da senha",
    example: "secret"
  })
  confirmpassword: string;
}
