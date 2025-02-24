import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Alumno } from '../../alumno/entities/alumno.entity';
import { ExamenTeorico } from '../../examenteorico/entities/examen-teorico.entity';

@Entity()
export class AlumnoHaceExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Alumno)
  @JoinColumn({ name: 'alumnoId' })
  alumno: Alumno;

  @Column()
  alumnoId: number;

  @ManyToOne(() => ExamenTeorico)
  @JoinColumn({ name: 'examenTeoricoId' })
  examenTeorico: ExamenTeorico;

  @Column()
  examenTeoricoId: number;

  @Column({ nullable: true })
  nota?: number;
}