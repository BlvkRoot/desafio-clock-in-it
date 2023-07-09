import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { Orders } from "./orders.model"

@Entity('clients')
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

    @OneToOne(() => Orders, order => order.client)
    order: Orders
}
