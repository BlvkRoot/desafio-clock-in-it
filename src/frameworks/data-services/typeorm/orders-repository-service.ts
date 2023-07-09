import { Injectable } from "@nestjs/common";
import { Orders } from "./model";
import {
  IFilterQueryParms,
  IOrdersRepository,
} from "./orders-repository-interface";
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

  filterClientsProduct({
    clientId,
    name,
    price,
    date,
  }: IFilterQueryParms): Promise<Orders[]> {

    const query = this.orderRepository
      .createQueryBuilder("orders")
      .leftJoinAndSelect("orders.product", "product")
      .where("orders.clientId = :clientId", { clientId });
    if (name) query.andWhere("product.name = :name", { name });
    if (price) query.andWhere("product.price = :price", { price });
    if (date) query.andWhere("orders.date = :date", { date });

    return query.getMany();
  }
}
