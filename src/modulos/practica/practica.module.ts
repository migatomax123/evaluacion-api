import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { PracticaController } from './practica.controller';
import { PracticaService } from './practica.service';
import { AlumnoRealizaPractica } from '../alumnorealizapractica/entities/alumno-realiza-practica.entity';
import { ProfesorDisenaPractica } from '../profesordiseñapractica/entities/profesor-disena-practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Practica, AlumnoRealizaPractica, ProfesorDisenaPractica])],
  controllers: [PracticaController],
  providers: [PracticaService],
  exports: [PracticaService],
})
export class PracticaModule {}