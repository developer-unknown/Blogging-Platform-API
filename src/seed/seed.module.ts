import { Module } from '@nestjs/common';

import { PostsModule } from 'src/posts/posts.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [
    PostsModule,
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
