import { Controller, Post, Body, Get, Param, Query } from "@nestjs/common";
import { CreateOrderDto } from "../core/dtos";
import { OrderUseCases } from "../use-cases/order/order-use-case";

@Controller("api/orders")
export class OrderController {
  constructor(private orderUseCases: OrderUseCases) {}

  @Get("/products")
  async getAll() {
    return this.orderUseCases.getAllOrders();
  }

  @Post()
  createProduct(@Body() orderDto: CreateOrderDto) {
    return this.orderUseCases.create(orderDto);
  }

  @Get("/clients/:id/products")
  async getAllClientProducts(@Param("id") id: string) {
    return this.orderUseCases.getAllOrdersByClientId(+id);
  }

  @Get("/clients/:id")
  async getAllClientProductsFiltered(
    @Param("id") id: string,
    @Query("name") name: string,
    @Query("price") price: string,
    @Query("date") date: string
  ) {
    return this.orderUseCases.getOrdersFiltered({
      clientId: +id,
      name,
      price: +price,
      date
    });
  }
}
