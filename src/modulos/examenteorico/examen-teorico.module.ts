import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { ExamenTeoricoController } from './examen-teorico.controller';
import { ExamenTeoricoService } from './examen-teorico.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenTeorico])],
  controllers: [ExamenTeoricoController],
  providers: [ExamenTeoricoService],
  exports: [ExamenTeoricoService], // Exporta el servicio si lo necesitas en otros módulos
})
export class ExamenTeoricoModule {}