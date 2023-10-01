import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    login:string

    @Column()
    password: string

    @Column()
    name_user:string

    @Column()
    email_user:string

    @CreateDateColumn()
    created_at: Date

}
