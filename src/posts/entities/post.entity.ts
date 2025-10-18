import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Post {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    content: string;

    @Column('varchar')
    category: string;

    @Column('json')
    tags: string[];

    @Column('datetime')
    createAt: Date;

    @Column('datetime')
    updateAt: Date;

    @BeforeInsert()
    checkDate() {
        this.createAt = new Date();
        this.updateAt = new Date();
    }

    @BeforeUpdate()
    checkUpdateAt() {
        this.updateAt = new Date();
    }
}
