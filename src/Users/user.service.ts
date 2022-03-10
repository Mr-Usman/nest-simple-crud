import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}

      async insertUser(userInfo: UserModel): Promise<UserEntity> {
        const { name, email, password } = userInfo;
        const userCreated = await this.userRepository.create({ name, email, password });
        const result = await this.userRepository.save(userCreated);
        console.log('db result:', result);
        return result;
        // const productData = await this.tasksRepository.create({
        //   title,
        //   price,
        //   description,
        // });
        // const result = await this.tasksRepository.save(productData);
        // return result;
      }
};