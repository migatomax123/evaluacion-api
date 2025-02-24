import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AlumnoHaceExamenTeoricoService } from './alumno-hace-examen-teorico.service';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno-hace-examen-teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno-hace-examen-teorico.dto';

@Controller('alumno-hace-examenes-teoricos')
export class AlumnoHaceExamenTeoricoController {
  constructor(private readonly alumnoHaceExamenTeoricoService: AlumnoHaceExamenTeoricoService) {}

  @Post()
  create(@Body() createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoService.create(createAlumnoHaceExamenTeoricoDto);
  }

  @Get()
  findAll() {
    return this.alumnoHaceExamenTeoricoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoHaceExamenTeoricoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto) {
    return this.alumnoHaceExamenTeoricoService.update(+id, updateAlumnoHaceExamenTeoricoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoHaceExamenTeoricoService.remove(+id);
  }
}