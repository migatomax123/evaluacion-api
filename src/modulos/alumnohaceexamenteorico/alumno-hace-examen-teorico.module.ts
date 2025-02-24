import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoHaceExamenTeorico } from './entities/alumno-hace-examen-teorico.entity';
import { AlumnoHaceExamenTeoricoController } from './alumno-hace-examen-teorico.controller';
import { AlumnoHaceExamenTeoricoService } from './alumno-hace-examen-teorico.service';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnoHaceExamenTeorico])],
  controllers: [AlumnoHaceExamenTeoricoController],
  providers: [AlumnoHaceExamenTeoricoService],
  exports: [AlumnoHaceExamenTeoricoService],
})
export class AlumnoHaceExamenTeoricoModule {}