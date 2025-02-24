import { IsNumber, IsDate, IsOptional } from 'class-validator';

export class UpdateAlumnoRealizaPracticaDto {
  @IsOptional()
  @IsNumber()
  alumnoId?: number;

  @IsOptional()
  @IsNumber()
  practicaId?: number;

  @IsOptional()
  @IsDate()
  fecha?: Date;

  @IsOptional()
  @IsNumber()
  nota?: number;
}