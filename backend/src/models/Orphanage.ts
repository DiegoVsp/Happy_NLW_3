import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import Image from './Image';

// decorator
@Entity('orphanages') // typeorm vai entender que a classe Orphanage está associada a tabela orphanages
export default class Orphanage {
  @PrimaryGeneratedColumn('increment') //
  id: number;

  @Column() // Indica que cada propriedade representa uma coluna no banco de dados
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({name: 'orphanage_id'})
  images:Image[];
}