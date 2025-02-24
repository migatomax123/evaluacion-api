import { IsNotEmpty, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateAlumnoRealizaPracticaDto {
  @IsNotEmpty()
  @IsNumber()
  alumnoId: number;

  @IsNotEmpty()
  @IsNumber()
  practicaId: number;

  @IsNotEmpty()
  @IsDate()
  fecha: Date;

  @IsOptional()
  @IsNumber()
  nota?: number;
}