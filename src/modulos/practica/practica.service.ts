import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { AlumnoRealizaPractica } from '../alumnorealizapractica/entities/alumno-realiza-practica.entity';
import { ProfesorDisenaPractica } from '../profesordiseñapractica/entities/profesor-disena-practica.entity';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private practicaRepository: Repository<Practica>,
    @InjectRepository(AlumnoRealizaPractica)
    private alumnoRealizaPracticaRepository: Repository<AlumnoRealizaPractica>,
    @InjectRepository(ProfesorDisenaPractica)
    private profesorDisenaPracticaRepository: Repository<ProfesorDisenaPractica>,
  ) {}

  async create(createPracticaDto: CreatePracticaDto): Promise<Practica> {
    const practica = this.practicaRepository.create(createPracticaDto);
    return this.practicaRepository.save(practica);
  }

  async findAll(): Promise<Practica[]> {
    return this.practicaRepository.find();
  }

  async findOne(id: number): Promise<Practica> {
    const practica = await this.practicaRepository.findOneBy({ id });
    if (!practica) {
      throw new NotFoundException(`Práctica con ID ${id} no encontrada`);
    }
    return practica;
  }

  async update(id: number, updatePracticaDto: UpdatePracticaDto): Promise<Practica> {
    const practica = await this.findOne(id);
    this.practicaRepository.merge(practica, updatePracticaDto);
    return this.practicaRepository.save(practica);
  }

  async remove(id: number): Promise<void> {
    const practica = await this.findOne(id);
    await this.practicaRepository.remove(practica);
  }

  async getAlumnosQueRealizan(id: number): Promise<AlumnoRealizaPractica[]> {
    const practica = await this.findOne(id);
    return this.alumnoRealizaPracticaRepository.find({
      where: { practicaId: id },
      relations: ['alumno'],
    });
  }

  async getProfesoresQueDisenan(id: number): Promise<ProfesorDisenaPractica[]> {
    const practica = await this.findOne(id);
    return this.profesorDisenaPracticaRepository.find({
      where: { practicaId: id },
      relations: ['profesor'],
    });
  }
}