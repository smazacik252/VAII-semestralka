import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from "typeorm";

@Entity()
export class Hero extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ unique: true })
    name: string = '';

    @Column({ unique: true })
    urlName: string = '';

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


    @BeforeInsert()
    @BeforeUpdate()
    normalizeName() {
        this.urlName = this.name.toLowerCase().replace(/\s+/g, "-");
    }

}
