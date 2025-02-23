import { IsString, IsOptional } from 'class-validator';

export class UpdatePracticaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  dificultad?: string;
}