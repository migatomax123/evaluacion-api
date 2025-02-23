import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateExamenTeoricoDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsNumber()
  numeroPreguntas: number;

  @IsNotEmpty()
  @IsDate()
  fecha: Date;

  @IsNotEmpty()
  @IsNumber()
  profesorId: number;
}