import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateAlumnoHaceExamenTeoricoDto {
  @IsNotEmpty()
  @IsNumber()
  alumnoId: number;

  @IsNotEmpty()
  @IsNumber()
  examenTeoricoId: number;

  @IsOptional()
  @IsNumber()
  nota?: number;
}