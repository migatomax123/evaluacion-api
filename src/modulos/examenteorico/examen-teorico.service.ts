import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { CreateExamenTeoricoDto } from './dto/create-examen-teorico.dto';
import { UpdateExamenTeoricoDto } from './dto/update-examen-teorico.dto';

@Injectable()
export class ExamenTeoricoService {
  constructor(
    @InjectRepository(ExamenTeorico)
    private examenTeoricoRepository: Repository<ExamenTeorico>,
  ) {}

  async create(createExamenTeoricoDto: CreateExamenTeoricoDto): Promise<ExamenTeorico> {
    const examenTeorico = this.examenTeoricoRepository.create(createExamenTeoricoDto);
    return this.examenTeoricoRepository.save(examenTeorico);
  }

  async findAll(): Promise<ExamenTeorico[]> {
    return this.examenTeoricoRepository.find();
  }

  async findOne(id: number): Promise<ExamenTeorico> {
    const examenTeorico = await this.examenTeoricoRepository.findOneBy({ id });
    if (!examenTeorico) {
      throw new NotFoundException(`Examen Teórico con ID ${id} no encontrado`);
    }
    return examenTeorico;
  }

  async update(id: number, updateExamenTeoricoDto: UpdateExamenTeoricoDto): Promise<ExamenTeorico> {
    const examenTeorico = await this.findOne(id); // Reutiliza findOne para verificar la existencia
    this.examenTeoricoRepository.merge(examenTeorico, updateExamenTeoricoDto);
    return this.examenTeoricoRepository.save(examenTeorico);
  }

  async remove(id: number): Promise<void> {
    const examenTeorico = await this.findOne(id); // Reutiliza findOne para verificar la existencia
    await this.examenTeoricoRepository.remove(examenTeorico);
  }
}