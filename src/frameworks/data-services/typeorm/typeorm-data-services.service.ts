import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDataServices } from '../../../core';
import { TypeormGenericRepository } from './typeorm-generic-repository';
import {
  Client, Orders, Product
} from './model';

@Injectable()
export class TypeormDataServices
  implements IDataServices, OnApplicationBootstrap
{
  clients: TypeormGenericRepository<Client>;
  products: TypeormGenericRepository<Product>;
  orders: TypeormGenericRepository<Orders>;

  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Orders)
    private orderRepository: Repository<Orders>,
  ) {}

  onApplicationBootstrap() {
    this.clients = new TypeormGenericRepository<Client>(this.clientRepository);
    this.products = new TypeormGenericRepository<Product>(this.productRepository);
    this.orders = new TypeormGenericRepository<Orders>(this.orderRepository);
  }
}
