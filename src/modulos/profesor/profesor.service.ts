import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { ExamenTeorico } from '../examenteorico/entities/examen-teorico.entity';
import { ProfesorDisenaPractica } from '../profesordiseñapractica/entities/profesor-disena-practica.entity';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private profesorRepository: Repository<Profesor>,
    @InjectRepository(ExamenTeorico)
    private examenTeoricoRepository: Repository<ExamenTeorico>,
    @InjectRepository(ProfesorDisenaPractica)
    private profesorDisenaPracticaRepository: Repository<ProfesorDisenaPractica>,
  ) {}

  async create(createProfesorDto: CreateProfesorDto): Promise<Profesor> {
    const profesor = this.profesorRepository.create(createProfesorDto);
    return this.profesorRepository.save(profesor);
  }

  async findAll(): Promise<Profesor[]> {
    return this.profesorRepository.find();
  }

  async findOne(id: number): Promise<Profesor> {
    const profesor = await this.profesorRepository.findOneBy({ id });
    if (!profesor) {
      throw new NotFoundException(`Profesor con ID ${id} no encontrado`);
    }
    return profesor;
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto): Promise<Profesor> {
    const profesor = await this.findOne(id);
    this.profesorRepository.merge(profesor, updateProfesorDto);
    return this.profesorRepository.save(profesor);
  }

  async remove(id: number): Promise<void> {
    const profesor = await this.findOne(id);
    await this.profesorRepository.remove(profesor);
  }

  async getExamenesTeoricos(id: number): Promise<ExamenTeorico[]> {
    const profesor = await this.findOne(id);
    return this.examenTeoricoRepository.find({
      where: { profesorId: id },
    });
  }

  async getPracticasDisenadas(id: number): Promise<ProfesorDisenaPractica[]> {
    const profesor = await this.findOne(id);
    return this.profesorDisenaPracticaRepository.find({
      where: { profesorId: id },
      relations: ['practica'],
    });
  }
}