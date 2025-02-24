import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { ExamenTeoricoController } from './examen-teorico.controller';
import { ExamenTeoricoService } from './examen-teorico.service';
import { AlumnoHaceExamenTeorico } from '../alumnohaceexamenteorico/entities/alumno-hace-examen-teorico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenTeorico, AlumnoHaceExamenTeorico])],
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
  exports: [ExamenTeoricoService],
})
export class ExamenTeoricoModule {}