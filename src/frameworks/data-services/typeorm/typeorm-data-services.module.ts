import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IDataServices } from '../../../core';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import {
  Client, Orders, Product
} from './model';
import { TypeormDataServices } from './typeorm-data-services.service';
import { IOrdersRepository } from './orders-repository-interface';
import { OrdersRepositoryService } from './orders-repository-service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Client,
      Product,
      Orders
    ]),
    TypeOrmModule.forRoot(DATA_BASE_CONFIGURATION as TypeOrmModuleOptions),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeormDataServices,
    },
    {
      provide: IOrdersRepository,
      useClass: OrdersRepositoryService,
    }
  ],
  exports: [IDataServices, IOrdersRepository],
})
export class TypeormDataServicesModule {}
