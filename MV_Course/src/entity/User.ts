import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    login: string

    @Column()
    name_user: string

    @Column()
    Password: string

    @Column()
    email_user: string

    @Column()
    cpf_user: string
}
