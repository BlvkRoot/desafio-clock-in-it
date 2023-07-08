import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({
        unique: true
    })
    phone: string

    @Column({
        nullable: true,
        unique: true
    })
    address: string
}
