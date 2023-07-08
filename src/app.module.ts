import { Module } from '@nestjs/common';
import {
  AppController,
  ClientController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ClientUseCasesModule } from './use-cases/client/client-use-cases.module';
import { ProductUseCasesModule } from './use-cases/product/product-use-cases.module';
import { ProductController } from './controllers/product.controller';
import { OrderUseCasesModule } from './use-cases/order/order-use-cases.module';
import { OrderController } from './controllers/order.controller';

@Module({
  imports: [
    DataServicesModule,
    ClientUseCasesModule,
    ProductUseCasesModule,
    OrderUseCasesModule
  ],
  controllers: [
    AppController,
    ClientController,
    ProductController,
    OrderController
  ],
  providers: [],
})
export class AppModule {}
