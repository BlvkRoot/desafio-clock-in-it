import { Orders } from "./model";


export abstract class IOrdersRepository 
{
  abstract getAllOrderProducts(): Promise<Orders[]>;
  abstract getAllOrderProductsByClientId(clientId: number): Promise<Orders[]>;
}