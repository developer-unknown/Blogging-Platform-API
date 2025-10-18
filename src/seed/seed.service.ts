import { Injectable } from '@nestjs/common';

import { initialData } from './data/seed-data';
import { PostsService } from 'src/posts/posts.service';
import { Post } from 'src/posts/entities/post.entity';

@Injectable()
export class SeedService {

  constructor(
    private readonly postsService: PostsService,
  ) {}

  async runSeed() {
    await this.postsService.deleteAllPosts();

    await this.insertNewPosts();

    return `SEED EXECUTED`;
  }

  private async insertNewPosts() {
    const seedPosts = initialData;
    const posts: Promise<Post | undefined>[] = [];
    seedPosts.forEach( post => {
      posts.push( this.postsService.create( post ));
    });

    Promise.all( posts );
  }
}
