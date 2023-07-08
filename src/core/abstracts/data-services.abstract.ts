import { Client, Product } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract clients: IGenericRepository<Client>;
  abstract products: IGenericRepository<Product>;
}
