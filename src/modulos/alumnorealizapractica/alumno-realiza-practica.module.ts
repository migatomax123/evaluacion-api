import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoRealizaPractica } from './entities/alumno-realiza-practica.entity';
import { AlumnoRealizaPracticaController } from './alumno-realiza-practica.controller';
import { AlumnoRealizaPracticaService } from './alumno-realiza-practica.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnoRealizaPractica])],
  controllers: [AlumnoRealizaPracticaController],
  providers: [AlumnoRealizaPracticaService],
  exports: [AlumnoRealizaPracticaService],
})
export class AlumnoRealizaPracticaModule {}