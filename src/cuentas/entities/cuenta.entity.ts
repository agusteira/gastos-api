import { Entity, PrimaryGeneratedColumn, Column, Double } from 'typeorm';

@Entity()
export class Cuenta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  nombre: string; //Debito, credito, etc

  @Column() 
  tipo: string; 

  @Column() 
  moneda: string; 

  @Column() 
  idUsuario: string; 
}