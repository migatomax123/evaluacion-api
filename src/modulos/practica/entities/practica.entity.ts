import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AlumnoRealizaPractica } from '../../alumnorealizapractica/entities/alumno-realiza-practica.entity';
import { ProfesorDisenaPractica } from '../../profesordiseñapractica/entities/profesor-disena-practica.entity';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @OneToMany(() => AlumnoRealizaPractica, (alumnoRealizaPractica) => alumnoRealizaPractica.practica)
  alumnosQueRealizan: AlumnoRealizaPractica[];

  @OneToMany(() => ProfesorDisenaPractica, (profesorDisenaPractica) => profesorDisenaPractica.practica)
  profesoresQueDisenan: ProfesorDisenaPractica[];
}