import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;
}