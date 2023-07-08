import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode
} from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "../core/dtos";
import { ProductUseCases } from "../use-cases/product/product-use-case";

@Controller("api/products")
export class ProductController {
  constructor(private productUseCases: ProductUseCases) {}

  @Get()
  async getAll() {
    return this.productUseCases.getAllProducts();
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.productUseCases.getProductById(+id);
  }

  @Post()
  createProduct(@Body() productDto: CreateProductDto) {
    return this.productUseCases.create(productDto);
  }

  @Put(":id")
  updateProduct(
    @Param("id") id: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return this.productUseCases.update(+id, updateProductDto);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteProduct(
    @Param("id") id: string
  ) {
    this.productUseCases.delete(+id);
  }
}
