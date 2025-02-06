import {Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Comment } from "./Comment";

@Entity()
export class Article extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    author: string = "";

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date | undefined;


    @Column()
    title: string = "";

    @Column()
    summary: string = "";

    @Column({type: "text"})
    text: string = "";

    @Column()
    imagePath: string = "";

    @OneToMany(() => Comment, (comment) => comment.article, { cascade: true })
    comments: Comment[] | undefined;
}
