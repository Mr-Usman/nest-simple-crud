import { ObjectType } from '@nestjs/graphql';
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base-entity';

@Entity({name: 'Products'})
@ObjectType()
export class Product extends BaseEntity {
    @Column({ type: 'varchar', length: 100, nullable: false})
    title: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    price: string;
 
    @Column({ type: 'text', default: null, nullable: true})
    description: string;
};