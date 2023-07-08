import { Product } from '../../core/entities';
import { CreateProductDto, UpdateProductDto } from '../../core/dtos';

export abstract class ProductFactoryService {
  static createNewProduct(createProductDto: CreateProductDto) {
    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.description = createProductDto.description;
    newProduct.price = createProductDto.price;

    return newProduct;
  }

  static updateProduct(updateProductDto: UpdateProductDto) {
    const newProduct = new Product();
    newProduct.name = updateProductDto.name;
    newProduct.description = updateProductDto.description;
    newProduct.price = updateProductDto.price;

    return newProduct;
  }
}
