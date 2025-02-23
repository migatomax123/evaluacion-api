import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class UpdateExamenTeoricoDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsNumber()
  numeroPreguntas?: number;

  @IsOptional()
  @IsDate()
  fecha?: Date;

  @IsOptional()
  @IsNumber()
  profesorId?: number;
}