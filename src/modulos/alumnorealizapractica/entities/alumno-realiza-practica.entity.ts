import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { Practica } from '../../practica/entities/practica.entity';

@Entity()
export class AlumnoRealizaPractica {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alumno)
  @JoinColumn({ name: 'alumnoId' })
  alumno: Alumno;

  @Column()
  alumnoId: number;

  @ManyToOne(() => Practica)
  @JoinColumn({ name: 'practicaId' })
  practica: Practica;

  @Column()
  practicaId: number;

  @Column()
  fecha: Date;

  @Column({ nullable: true })
  nota?: number;
}