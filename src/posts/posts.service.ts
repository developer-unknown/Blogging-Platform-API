import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

import { CreatePostDto, UpdatePostDto } from './dto';
import { Post } from './entities/post.entity';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    try {
      const post = this.postRepository.create( createPostDto );
      await this.postRepository.save( post );
      return post;
    } catch (error) {
      console.log( error );
    }
  }

  async findAll( paginationDto: PaginationDto ) {

    const { limit = 10, skip = 0, search } = paginationDto;

    if ( search )
      return this.findSearch( search, limit, skip );

    return await this.postRepository.find({
      take: limit,
      skip,
    });
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOneBy({ id });

    if ( !post )
      throw new NotFoundException(`The post with id ${ id } was not found`);

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {

    const post = await this.postRepository.preload({
      id,
      ...updatePostDto,
    });

    if ( !post )
      throw new NotFoundException(`The post with id ${ id } was not found`);

    await this.postRepository.save( post );
    return post;
  }

  async remove(id: number) {
    const post = await this.findOne( id );
    await this.postRepository.remove( post );
  }

  private async findSearch( search: string, limit: number, skip: number ) {

    return await this.postRepository.find({
      where: [
        { title: Like(`%${ search }%`) },
        { content: Like(`%${ search }%`) },
        { category: Like(`%${ search }%`) }
      ],
      take: limit,
      skip,
    });
  }

  async deleteAllPosts() {

    const queryBuilder = this.postRepository.createQueryBuilder();

    try {
      await queryBuilder
      .delete()
      .where({})
      .execute()
    } catch (error) {
      console.log( error );
    }
  }
}
