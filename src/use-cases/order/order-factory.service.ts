import { Orders } from '../../core/entities';
import { CreateOrderDto, UpdateOrderDto } from '../../core/dtos';

export abstract class OrderFactoryService {
  static createNewOrder(createOrderDto: CreateOrderDto) {
    const newOrder = new Orders();
    newOrder.clientId = createOrderDto.clientId;
    newOrder.productId = createOrderDto.productId;

    return newOrder;
  }

  static updateOrder(updateOrderDto: UpdateOrderDto) {
    const newOrder = new Orders();
    newOrder.clientId = updateOrderDto.clientId;
    newOrder.productId = updateOrderDto.productId;

    return newOrder;
  }
}
