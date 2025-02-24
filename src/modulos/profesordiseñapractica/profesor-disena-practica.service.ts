import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorDisenaPractica } from './entities/profesor-disena-practica.entity';
import { CreateProfesorDisenaPracticaDto } from './dto/create-profesor-disena-practica.dto';
import { UpdateProfesorDisenaPracticaDto } from './dto/update-profesor-disena-practica.dto';

@Injectable()
export class ProfesorDisenaPracticaService {
  constructor(
    @InjectRepository(ProfesorDisenaPractica)
    private profesorDisenaPracticaRepository: Repository<ProfesorDisenaPractica>,
  ) {}

  async create(createProfesorDisenaPracticaDto: CreateProfesorDisenaPracticaDto): Promise<ProfesorDisenaPractica> {
    const profesorDisenaPractica = this.profesorDisenaPracticaRepository.create(createProfesorDisenaPracticaDto);
    return this.profesorDisenaPracticaRepository.save(profesorDisenaPractica);
  }

  async findAll(): Promise<ProfesorDisenaPractica[]> {
    return this.profesorDisenaPracticaRepository.find();
  }

  async findOne(id: number): Promise<ProfesorDisenaPractica> {
    const profesorDisenaPractica = await this.profesorDisenaPracticaRepository.findOneBy({ id });
    if (!profesorDisenaPractica) {
      throw new NotFoundException(`ProfesorDisenaPractica con ID ${id} no encontrado`);
    }
    return profesorDisenaPractica;
  }

  async update(id: number, updateProfesorDisenaPracticaDto: UpdateProfesorDisenaPracticaDto): Promise<ProfesorDisenaPractica> {
    const profesorDisenaPractica = await this.findOne(id);
    if (profesorDisenaPractica) {
      this.profesorDisenaPracticaRepository.merge(profesorDisenaPractica, updateProfesorDisenaPracticaDto);
      return this.profesorDisenaPracticaRepository.save(profesorDisenaPractica);
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    await this.profesorDisenaPracticaRepository.delete(id);
  }
}