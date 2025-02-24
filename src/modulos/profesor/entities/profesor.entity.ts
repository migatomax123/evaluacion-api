import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ExamenTeorico } from '../../examenteorico/entities/examen-teorico.entity';
import { ProfesorDisenaPractica } from '../../profesordiseñapractica/entities/profesor-disena-practica.entity';

@Entity()
export class Profesor {
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

  @OneToMany(() => ExamenTeorico, (examenTeorico) => examenTeorico.profesor)
  examenesTeoricos: ExamenTeorico[];

  @OneToMany(() => ProfesorDisenaPractica, (profesorDisenaPractica) => profesorDisenaPractica.profesor)
  practicasDisenadas: ProfesorDisenaPractica[];
}