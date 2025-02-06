import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from "typeorm";

@Entity()
export class Hero extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ unique: true })
    name: string = '';

    @Column()
    urlName: string = '';

    @Column()
    portrait: string = '';

    @Column()
    render: string = '';

    @Column()
    info: string = '';

    @Column()
    lore: string = '';

    @Column("float")
    dps: number = 0;

    @Column("float")
    bulletDamage: number = 0;

    @Column("int")
    ammo: number = 0;

    @Column("float")
    bulletsPerSec: number = 0;

    @Column("float")
    reloadTime: number = 0;

    @Column("float")
    bulletVelocity: number = 0;

    @Column("float")
    lightMelee: number = 0;

    @Column("float")
    heavyMelee: number = 0;

    @Column("float")
    falloffRange: number = 0;

    @Column("float")
    health: number = 0;

    @Column("float")
    healthRegen: number = 0;

    @Column("float")
    moveSpeed: number = 0;

    @Column("int")
    stamina: number = 0;

    @BeforeInsert()
    @BeforeUpdate()
    normalizeName() {
        this.urlName = this.name.toLowerCase().replace(/\s+/g, "-");
    }
}
