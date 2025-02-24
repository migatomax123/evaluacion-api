import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorDisenaPractica } from './entities/profesor-disena-practica.entity';
import { ProfesorDisenaPracticaController } from './profesor-disena-practica.controller';
import { ProfesorDisenaPracticaService } from './profesor-disena-practica.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorDisenaPractica])],
  controllers: [ProfesorDisenaPracticaController],
  providers: [ProfesorDisenaPracticaService],
  exports: [ProfesorDisenaPracticaService],
})
export class ProfesorDisenaPracticaModule {}