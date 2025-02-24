import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AlumnoHaceExamenTeorico } from '../../alumnohaceexamenteorico/entities/alumno-hace-examen-teorico.entity';
import { AlumnoRealizaPractica } from '../../alumnorealizapractica/entities/alumno-realiza-practica.entity';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nif: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column({ nullable: true })
  apellido2?: string;

  @Column({ nullable: true })
  grupo?: string;

  @OneToMany(() => AlumnoHaceExamenTeorico, (alumnoHaceExamenTeorico) => alumnoHaceExamenTeorico.alumno)
  examenesTeoricos: AlumnoHaceExamenTeorico[];

  @OneToMany(() => AlumnoRealizaPractica, (alumnoRealizaPractica) => alumnoRealizaPractica.alumno)
  practicas: AlumnoRealizaPractica[];
}