import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Orders } from "./orders.model"

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @ManyToOne(() => Orders, order => order.product)
    orders: Orders[]
}
