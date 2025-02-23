import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ExamenTeoricoService } from './examen-teorico.service';
import { CreateExamenTeoricoDto } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examen-teorico.dto';

@Controller('examenes-teoricos')
export class ExamenTeoricoController {
  constructor(private readonly examenTeoricoService: ExamenTeoricoService) {}

  @Post()
  create(@Body() createExamenTeoricoDto: CreateExamenTeoricoDto) {
    return this.examenTeoricoService.create(createExamenTeoricoDto);
  }

  @Get()
  findAll() {
    return this.examenTeoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenTeoricoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateExamenTeoricoDto: UpdateExamenTeoricoDto) {
    return this.examenTeoricoService.update(+id, updateExamenTeoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenTeoricoService.remove(+id);
  }
}