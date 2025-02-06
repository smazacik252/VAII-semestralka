import {Entity, BaseEntity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Item extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    type: string = '';

    @Column({ unique: true })
    name: string = '';

    @Column( "integer" )
    price: number = 0;

    @Column()
    description: string = '';
}
