import { IsNotEmpty, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateProfesorDisenaPracticaDto {
  @IsNotEmpty()
  @IsNumber()
  profesorId: number;

  @IsNotEmpty()
  @IsNumber()
  practicaId: number;

  @IsNotEmpty()
  @IsDate()
  fecha: Date;
}