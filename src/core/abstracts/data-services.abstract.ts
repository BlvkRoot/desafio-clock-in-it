import { Client, Product, Orders } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract clients: IGenericRepository<Client>;
  abstract products: IGenericRepository<Product>;
  abstract orders: IGenericRepository<Orders>;
}
