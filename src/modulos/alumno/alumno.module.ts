import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { AlumnoController } from './alumno.controller';
import { AlumnoService } from './alumno.service';
import { AlumnoHaceExamenTeorico } from '../alumnohaceexamenteorico/entities/alumno-hace-examen-teorico.entity';
import { AlumnoRealizaPractica } from '../alumnorealizapractica/entities/alumno-realiza-practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, AlumnoHaceExamenTeorico, AlumnoRealizaPractica])],
  controllers: [AlumnoController],
  providers: [AlumnoService],
  exports: [AlumnoService],
})
export class AlumnoModule {}