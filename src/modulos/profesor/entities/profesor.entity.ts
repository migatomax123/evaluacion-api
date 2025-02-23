import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}