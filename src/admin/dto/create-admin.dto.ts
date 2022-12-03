import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({
    description: 'nome de administrador',
    example: 'Mateus Santiago',
  })
  name: string;

  @ApiProperty({
    description: 'Email',
    example: 'exemplo@exemplo.com.br',
  })
  email: string;

  @ApiProperty({
    description: 'Senha',
    example: 'secret',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmação da senha',
    example: 'secret',
  })
  confirmPassword: string;
}
