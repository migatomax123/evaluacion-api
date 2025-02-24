import { IsNumber, IsOptional } from 'class-validator';

export class UpdateAlumnoHaceExamenTeoricoDto {
  @IsOptional()
  @IsNumber()
  alumnoId?: number;

  @IsOptional()
  @IsNumber()
  examenTeoricoId?: number;

  @IsOptional()
  @IsNumber()
  nota?: number;
}