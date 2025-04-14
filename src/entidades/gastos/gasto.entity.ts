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
  idUsuario: string;

  @Column() 
  moneda: string;

  @Column() 
  TipoTransaccion: string; //Ingreso - egreso

  @Column() 
  cuenta: string;

  @Column() 
  chanchito: string;

  @Column() 
  tipo: string; //Debito, credito, etc
  /*
  Falta agregar:
    -cuenta (BNA, Uala, brubank, efectivo, etc)
    -tipo de gasto (Debito, credito, efectivo)
    -chanchito (Goce, Ahorro, etc)
   */
}