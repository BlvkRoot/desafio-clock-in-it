import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Client } from "./client.model";
import { Product } from "./product.model";

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @OneToOne(() => Client, (client) => client.order)
  @JoinColumn({ name: "clientId" })
  client: Client;

  @Column()
  productId: number;

  @OneToOne(() => Product, (product) => product.order)
  @JoinColumn({ name: "productId" })
  product: Product;

  @CreateDateColumn()
  date: Date;
}
