import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IDataServices } from '../../../core';
import { DATA_BASE_CONFIGURATION } from '../../../configuration';
import {
  Client, Product
} from './model';
import { TypeormDataServices } from './typeorm-data-services.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Client,
      Product
    ]),
    TypeOrmModule.forRoot(DATA_BASE_CONFIGURATION as TypeOrmModuleOptions),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeormDataServices,
    },
  ],
  exports: [IDataServices],
})
export class TypeormDataServicesModule {}
