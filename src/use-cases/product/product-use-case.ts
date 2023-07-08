import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../../core/entities";
import { IDataServices } from "../../core/abstracts";
import { CreateProductDto, UpdateProductDto } from "../../core/dtos";
import { ProductFactoryService } from "./product-factory.service";

@Injectable()
export class ProductUseCases {
  constructor(private dataServices: IDataServices) {}

  async getAllProducts(): Promise<Product[]> {
    return this.dataServices.products.getAll();
  }

  async getProductById(id: any): Promise<Product> {
    return this.findById(id);
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = ProductFactoryService.createNewProduct(createProductDto);
    return this.dataServices.products.create(product);
  }

  async update(
    productId: number,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    const product = await this.findById(productId);
    Object.assign(product, updateProductDto);

    return this.dataServices.products.update(productId, product);
  }

  async delete(productId: number): Promise<void> {
    const product = await this.findById(productId);

    await this.dataServices.products.delete(productId, product);
  }

  async findById(productId: number): Promise<Product> {
    const product = await this.dataServices.products.findOne(productId);

    if (!product)
      throw new NotFoundException(`Product ${productId} does not exist`);
    return product;
  }
}
