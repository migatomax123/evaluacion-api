import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { Practica } from '../../practica/entities/practica.entity';

@Entity()
export class ProfesorDisenaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profesor)
  @JoinColumn({ name: 'profesorId' })
  profesor: Profesor;

  @Column()
  profesorId: number;

  @ManyToOne(() => Practica)
  @JoinColumn({ name: 'practicaId' })
  practica: Practica;

  @Column()
  practicaId: number;

  @Column()
  fecha: Date;
}