import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAlumnoDto {
  @IsNotEmpty()
  @IsString()
  nif: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido1: string;

  @IsOptional()
  @IsString()
  apellido2?: string;

  @IsOptional()
  @IsString()
  grupo?: string;
}