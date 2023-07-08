import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Orders } from "./orders.model"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column({
        nullable: true
    })
    address: string

    @ManyToOne(() => Orders, order => order.product)
    orders: Orders[]
}
