import { Injectable, NotFoundException } from '@nestjs/common';
// import { Product } from './product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductModel } from './product.model'; // dto

@Injectable()
export class ProductService {
  // private products: Product[] = [];
  constructor(
    @InjectRepository(Product)
    private tasksRepository: Repository<Product>,
  ) {}

  async insertProduct(productInfo: ProductModel): Promise<Product> {
    const { title, description, price } = productInfo;
    const productData = await this.tasksRepository.create({
      title,
      price,
      description,
    });
    const result = await this.tasksRepository.save(productData);
    return result;
  }

  async getAllProducts(): Promise<Product[]> {
    // return copy of the private data
    return await this.tasksRepository.find();
  }

  getProduct(prodId: string): Promise<Product> {
    return this.tasksRepository.findOne(prodId);
  }

  updateProduct(productId: string, title: string, desc: string, price: string) {
    return this.tasksRepository
      .createQueryBuilder()
      .update(Product)
      .set({
        title,
        description: desc,
        price,
      })
      .where('id = :id', { id: productId })
      .execute();
    // const [product, index] = this.findProduct(productId);
    // const updatedProduct = { ...product };
    // if (title) {
    //   updatedProduct.title = title;
    // }
    // if (desc) {
    //   updatedProduct.description = desc;
    // }
    // if (price) {
    //   updatedProduct.price = price;
    // }
    // this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    // const index = this.findProduct(prodId)[1];
    // this.products.splice(index, 1);
    return this.tasksRepository
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where('id = :id', { id: prodId })
      .execute();
  }

  // private findProduct(id: string): [Product, number] {
  //     const productIndex = this.products.findIndex(prod => prod.id === id);
  //     const product = this.products[productIndex];
  //     if (!product) {
  //       throw new NotFoundException('Could not find product.');
  //     }
  //     return [product, productIndex];
  //   }
}
