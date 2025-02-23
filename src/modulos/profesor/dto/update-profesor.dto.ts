import { IsString, IsOptional } from 'class-validator';

export class UpdateProfesorDto {
  @IsOptional()
  @IsString()
  nif?: string;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  apellido1?: string;

  @IsOptional()
  @IsString()
  apellido2?: string;
}