import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ unique: true })
    email: string = '';

    @Column()
    userName: string = '';

    @Column()
    password: string = '';

    @Column({ default: 'user' })
    role: string = 'user';


}
