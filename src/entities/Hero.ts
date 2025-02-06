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

    @Column("float", { default: 0 })
    dps: number = 0;

    @Column("float", { default: 0 })
    bulletDamage: number = 0;

    @Column("int", { default: 0 })
    ammo: number = 0;

    @Column("float", { default: 0 })
    bulletsPerSec: number = 0;

    @Column("float", { default: 0 })
    reloadTime: number = 0;

    @Column("float", { default: 0 })
    bulletVelocity: number = 0;

    @Column("float", { default: 0 })
    lightMelee: number = 0;

    @Column("float", { default: 0 })
    heavyMelee: number = 0;

    @Column("float", { default: 0 })
    falloffRange: number = 0;

    @Column("float", { default: 0 })
    health: number = 0;

    @Column("float", { default: 0 })
    healthRegen: number = 0;

    @Column("float", { default: 0 })
    moveSpeed: number = 0;

    @Column("int", { default: 0 })
    stamina: number = 0;

    @BeforeInsert()
    @BeforeUpdate()
    normalizeName() {
        this.urlName = this.name.toLowerCase().replace(/\s+/g, "-");
    }
}
