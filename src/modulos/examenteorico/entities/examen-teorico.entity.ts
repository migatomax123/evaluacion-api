import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { AlumnoHaceExamenTeorico } from '../../alumnohaceexamenteorico/entities/alumno-hace-examen-teorico.entity';

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

  @ManyToOne(() => Profesor, (profesor) => profesor.examenesTeoricos)
  @JoinColumn({ name: 'profesorId' })
  profesor: Profesor;

  @Column()
  profesorId: number;

  @OneToMany(() => AlumnoHaceExamenTeorico, (alumnoHaceExamenTeorico) => alumnoHaceExamenTeorico.examenTeorico)
  alumnosQueHacen: AlumnoHaceExamenTeorico[];
}