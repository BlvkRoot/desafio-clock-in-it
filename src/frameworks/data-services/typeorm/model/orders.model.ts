import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { Client } from "./client.model";
import { Product } from "./product.model";

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @OneToMany(() => Client, (client) => client.orders)
  @JoinColumn({ name: "clientId" })
  client: Client;

  @Column()
  productId: number;

  @OneToMany(() => Product, (product) => product.orders)
  @JoinColumn({ name: "productId" })
  product: Product;

  @CreateDateColumn()
  date: Date;
}
