import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hero extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ unique: true })
    name: string = '';

    @Column()
    portrait: string = '';

    @Column()
    render: string = '';

    @Column()
    info: string = '';

    @Column()
    lore: string = '';

    @Column({ type: "json"})
    statsWeapon: { [key: string]: number } = {};

    @Column({ type: "json"})
    statsVitality: { [key: string]: number } = {};

}
