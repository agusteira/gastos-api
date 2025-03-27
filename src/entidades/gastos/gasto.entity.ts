import { Entity, PrimaryGeneratedColumn, Column, Double } from 'typeorm';

@Entity()
export class Gasto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  descripcion: string;

  @Column('float')
  monto: number;

  @Column()
  categoria: string;

  @Column() // @OneToMany(() => Usuario, (usuario) => usuario.departamento)
  usuario: string;

  @Column() 
  moneda: string;
}