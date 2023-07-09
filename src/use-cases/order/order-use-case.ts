import { Injectable, NotFoundException } from "@nestjs/common";
import { Orders } from "../../core/entities";
import { IDataServices } from "../../core/abstracts";
import { CreateOrderDto } from "../../core/dtos";
import { OrderFactoryService } from "./order-factory.service";
import { IFilterQueryParms, IOrdersRepository } from "../../frameworks/data-services/typeorm/orders-repository-interface";

@Injectable()
export class OrderUseCases {
  constructor(private dataServices: IDataServices, private orderRepository: IOrdersRepository) {}

  async getAllOrders(): Promise<Orders[]> {
    return this.orderRepository.getAllOrderProducts();
  }

  async getAllOrdersByClientId(clientId: number): Promise<Orders[]> {
    return this.orderRepository.getAllOrderProductsByClientId(clientId);
  }

  async getOrdersFiltered(ordersQuery: IFilterQueryParms): Promise<Orders[]> {
    return this.orderRepository.filterClientsProduct(ordersQuery);
  }

  async create({ clientId, productId }: CreateOrderDto): Promise<Orders> {
    const clientExists = await this.dataServices.clients.findOne(clientId);
    const productExists = await this.dataServices.products.findOne(productId);

    if (!clientExists || !productExists) {
      throw new NotFoundException(
        `Client ${clientId} or Product ${productId} does not exist, please use an existing client or product!`
      );
    }

    const order = OrderFactoryService.createNewOrder({
      clientId,
      productId,
    });

    return this.dataServices.orders.create(order);
  }
}
