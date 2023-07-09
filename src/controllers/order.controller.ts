import {
  Controller,
  Post,
  Body,
  Get
} from "@nestjs/common";
import { CreateOrderDto } from "../core/dtos";
import { OrderUseCases } from "../use-cases/order/order-use-case";

@Controller("api/orders")
export class OrderController {
  constructor(private orderUseCases: OrderUseCases) {}

  @Get('/products')
  async getAll() {
    return this.orderUseCases.getAllOrders();
  }

  @Post()
  createProduct(@Body() orderDto: CreateOrderDto) {
    return this.orderUseCases.create(orderDto);
  }

}
