import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from './entities/practica.entity';
import { PracticaController } from './practica.controller';
import { PracticaService } from './practica.service';

@Module({
  imports: [TypeOrmModule.forFeature([Practica])],
  controllers: [PracticaController],
  providers: [PracticaService],
  exports: [PracticaService],
})
export class PracticaModule {}