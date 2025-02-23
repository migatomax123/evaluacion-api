import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  
    @Column({ nullable: true }) // Permite que apellido2 sea opcional
    apellido2?: string;
  
    @Column({ nullable: true }) // Permite que grupo sea opcional
    grupo?: string;
}
