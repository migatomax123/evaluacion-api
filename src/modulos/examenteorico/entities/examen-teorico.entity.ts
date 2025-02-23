import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Profesor } from './../../profesor/entities/profesor.entity'; // Asegúrate de que la ruta sea correcta

@Entity()
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  numeroPreguntas: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Profesor)
  @JoinColumn({ name: 'profesorId' })
  profesor: Profesor;

  @Column()
  profesorId: number;
}