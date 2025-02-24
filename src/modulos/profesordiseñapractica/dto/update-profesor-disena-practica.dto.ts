import { IsNumber, IsDate, IsOptional } from 'class-validator';

export class UpdateProfesorDisenaPracticaDto {
  @IsOptional()
  @IsNumber()
  profesorId?: number;

  @IsOptional()
  @IsNumber()
  practicaId?: number;

  @IsOptional()
  @IsDate()
  fecha?: Date;
}