 import { ObjectType } from '@nestjs/graphql';
 import { Entity, Column, OneToMany } from 'typeorm';
 import { BaseEntity } from '../../base-entity';
 import { Product } from '../../Products/entities/product.entity';

 @Entity({name: 'User'})
 @ObjectType()
 export class UserEntity extends BaseEntity {
    @Column({ type: 'varchar', length: 100, nullable: false})
    name: string;
   
    @Column({ type: 'varchar', length: 100, nullable: false})
    email: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    password: string;

    @Column({ type: 'varchar', length: 100, nullable: true})
    hobbies: string;

    @OneToMany(type => Product, product => product.user)
    products: Product[]; 
 }; 

