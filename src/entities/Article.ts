import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Comment} from "./Comment";

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ unique: true })
    author: string = '';

    @Column({type : "date", default : () => "CURRENT_DATE"})
    createdAt: Date = new Date();

    @Column()
    title: string = '';

    @Column()
    text: string = '';

    @OneToMany(() => Comment, (comment) => comment.article)
    comments: Comment[] = [];
}
