import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Orders } from "./orders.model"

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @OneToOne(() => Orders, order => order.product)
    order: Orders
}
