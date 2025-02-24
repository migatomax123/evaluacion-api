import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlumnoHaceExamenTeorico } from './entities/alumno-hace-examen-teorico.entity';
import { CreateAlumnoHaceExamenTeoricoDto } from './dto/create-alumno-hace-examen-teorico.dto';
import { UpdateAlumnoHaceExamenTeoricoDto } from './dto/update-alumno-hace-examen-teorico.dto';

@Injectable()
export class AlumnoHaceExamenTeoricoService {
  constructor(
    @InjectRepository(AlumnoHaceExamenTeorico)
    private alumnoHaceExamenTeoricoRepository: Repository<AlumnoHaceExamenTeorico>,
  ) {}

  async create(createAlumnoHaceExamenTeoricoDto: CreateAlumnoHaceExamenTeoricoDto): Promise<AlumnoHaceExamenTeorico> {
    const alumnoHaceExamenTeorico = this.alumnoHaceExamenTeoricoRepository.create(createAlumnoHaceExamenTeoricoDto);
    return this.alumnoHaceExamenTeoricoRepository.save(alumnoHaceExamenTeorico);
  }

  async findAll(): Promise<AlumnoHaceExamenTeorico[]> {
    return this.alumnoHaceExamenTeoricoRepository.find();
  }

  async findOne(id: number): Promise<AlumnoHaceExamenTeorico> {
    const alumnoHaceExamenTeorico = await this.alumnoHaceExamenTeoricoRepository.findOneBy({ id });
    if (!alumnoHaceExamenTeorico) {
      throw new NotFoundException(`AlumnoHaceExamenTeorico con ID ${id} no encontrado`);
    }
    return alumnoHaceExamenTeorico;
  }

  async update(id: number, updateAlumnoHaceExamenTeoricoDto: UpdateAlumnoHaceExamenTeoricoDto): Promise<AlumnoHaceExamenTeorico> {
    const alumnoHaceExamenTeorico = await this.findOne(id);
    if (alumnoHaceExamenTeorico) {
      this.alumnoHaceExamenTeoricoRepository.merge(alumnoHaceExamenTeorico, updateAlumnoHaceExamenTeoricoDto);
      return this.alumnoHaceExamenTeoricoRepository.save(alumnoHaceExamenTeorico);
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    await this.alumnoHaceExamenTeoricoRepository.delete(id);
  }
}