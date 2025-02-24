import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProfesorDisenaPracticaService } from './profesor-disena-practica.service';
import { CreateProfesorDisenaPracticaDto } from './dto/create-profesor-disena-practica.dto';
import { UpdateProfesorDisenaPracticaDto } from './dto/update-profesor-disena-practica.dto';

@Controller('profesor-disena-practicas')
export class ProfesorDisenaPracticaController {
  constructor(private readonly profesorDisenaPracticaService: ProfesorDisenaPracticaService) {}

  @Post()
  create(@Body() createProfesorDisenaPracticaDto: CreateProfesorDisenaPracticaDto) {
    return this.profesorDisenaPracticaService.create(createProfesorDisenaPracticaDto);
  }

  @Get()
  findAll() {
    return this.profesorDisenaPracticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorDisenaPracticaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProfesorDisenaPracticaDto: UpdateProfesorDisenaPracticaDto) {
    return this.profesorDisenaPracticaService.update(+id, updateProfesorDisenaPracticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorDisenaPracticaService.remove(+id);
  }
}