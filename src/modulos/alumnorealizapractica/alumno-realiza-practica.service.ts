import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoRealizaPractica } from './entities/alumno-realiza-practica.entity';
import { CreateAlumnoRealizaPracticaDto } from './dto/create-alumno-realiza-practica.dto';
import { UpdateAlumnoRealizaPracticaDto } from './dto/update-alumno-realiza-practica.dto';

@Injectable()
export class AlumnoRealizaPracticaService {
  constructor(
    @InjectRepository(AlumnoRealizaPractica)
    private alumnoRealizaPracticaRepository: Repository<AlumnoRealizaPractica>,
  ) {}

  async create(createAlumnoRealizaPracticaDto: CreateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica> {
    const alumnoRealizaPractica = this.alumnoRealizaPracticaRepository.create(createAlumnoRealizaPracticaDto);
    return this.alumnoRealizaPracticaRepository.save(alumnoRealizaPractica);
  }

  async findAll(): Promise<AlumnoRealizaPractica[]> {
    return this.alumnoRealizaPracticaRepository.find();
  }

  async findOne(id: number): Promise<AlumnoRealizaPractica> {
    const alumnoRealizaPractica = await this.alumnoRealizaPracticaRepository.findOneBy({ id });
    if (!alumnoRealizaPractica) {
      throw new NotFoundException(`AlumnoRealizaPractica con ID ${id} no encontrado`);
    }
    return alumnoRealizaPractica;
  }

  async update(id: number, updateAlumnoRealizaPracticaDto: UpdateAlumnoRealizaPracticaDto): Promise<AlumnoRealizaPractica> {
    const alumnoRealizaPractica = await this.findOne(id);
    if (alumnoRealizaPractica) {
      this.alumnoRealizaPracticaRepository.merge(alumnoRealizaPractica, updateAlumnoRealizaPracticaDto);
      return this.alumnoRealizaPracticaRepository.save(alumnoRealizaPractica);
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    await this.alumnoRealizaPracticaRepository.delete(id);
  }
}