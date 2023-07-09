import { Injectable } from "@nestjs/common";
import { Orders } from "./model";
import { IOrdersRepository } from "./orders-repository-interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class OrdersRepositoryService implements IOrdersRepository {
  constructor(
    @InjectRepository(Orders)
    private orderRepository: Repository<Orders>
  ) {}

  getAllOrderProducts(): Promise<Orders[]> {
    return this.orderRepository
      .createQueryBuilder("orders")
      .leftJoinAndSelect("orders.product", "product")
      .getMany();
  }

  getAllOrderProductsByClientId(clientId: number): Promise<Orders[]> {
    return this.orderRepository
      .createQueryBuilder("orders")
      .leftJoinAndSelect("orders.product", "product")
      .where("orders.clientId = :clientId", { clientId })
      .getMany();
  }
}
