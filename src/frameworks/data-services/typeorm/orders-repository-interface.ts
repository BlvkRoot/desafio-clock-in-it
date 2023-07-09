import { Orders } from "./model";


export abstract class IOrdersRepository 
{
  abstract getAllOrderProducts(): Promise<Orders[]>;
}