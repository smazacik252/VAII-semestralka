import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Article} from "./Article";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: "text" })
    content: string = "";

    @ManyToOne(() => Article, (article) => article.comments, { onDelete: "CASCADE" })
    @JoinColumn({ name: "articleId" })
    article!: Article;

    @Column()
    articleId: number = 0;

    @ManyToOne(() => Comment, (comment) => comment.children, { nullable: true })
    @JoinColumn({ name: "parentId" })
    parent: Comment | null = null;

    @Column({ nullable: true })
    parentId: number | null = null;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date = new Date();

    @Column({ type: "timestamp", nullable: true })
    updatedAt: Date | null = null;

    @OneToMany(() => Comment, (comment) => comment.parent)
    children: Comment[] = [];
}
