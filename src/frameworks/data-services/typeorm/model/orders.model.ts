import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  BeforeInsert,
} from "typeorm";
import { Client } from "./client.model";
import { Product } from "./product.model";

@Entity("orders")
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

  @Column({ type: "date" })
  date: string;

  @BeforeInsert()
  updateDates() {
    this.date = new Date().toISOString().split("T")[0];
  }
}
