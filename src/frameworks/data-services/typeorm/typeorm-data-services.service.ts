import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDataServices } from '../../../core';
import { TypeormGenericRepository } from './typeorm-generic-repository';
import {
  Client, Product
} from './model';

@Injectable()
export class TypeormDataServices
  implements IDataServices, OnApplicationBootstrap
{
  clients: TypeormGenericRepository<Client>;
  products: TypeormGenericRepository<Product>;

  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  onApplicationBootstrap() {
    this.clients = new TypeormGenericRepository<Client>(this.clientRepository);
    this.products = new TypeormGenericRepository<Product>(this.productRepository);
  }
}
