import { Orders } from "./model";

export interface IFilterQueryParms {
  clientId: number;
  name?: string;
  date?: string;
  price?: number;
}

export abstract class IOrdersRepository 
{
  abstract getAllOrderProducts(): Promise<Orders[]>;
  abstract getAllOrderProductsByClientId(clientId: number): Promise<Orders[]>;
  abstract filterClientsProduct(queryParams: IFilterQueryParms): Promise<Orders[]>;
}