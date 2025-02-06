import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity
} from "typeorm";
import { Article } from "./Article";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: "text" })
    content: string = "";

    @ManyToOne(() => Article, (article) => article.comments, {
        onDelete: "CASCADE",
    })

    @JoinColumn({ name: "articleId" })
    article: Article | null = null;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date = new Date();

    @Column({ type: "timestamp", nullable: true })
    updatedAt: Date | null = null;
}
