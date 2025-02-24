import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profesor } from './entities/profesor.entity';
import { ProfesorController } from './profesor.controller';
import { ProfesorService } from './profesor.service';
import { ExamenTeorico } from '../examenteorico/entities/examen-teorico.entity';
import { ProfesorDisenaPractica } from '../profesordiseñapractica/entities/profesor-disena-practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, ExamenTeorico, ProfesorDisenaPractica])],
  controllers: [ProfesorController],
  providers: [ProfesorService],
  exports: [ProfesorService],
})
export class ProfesorModule {}