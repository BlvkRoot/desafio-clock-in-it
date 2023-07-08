import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { OrderUseCases } from './order-use-case';

@Module({
  imports: [DataServicesModule],
  providers: [OrderUseCases],
  exports: [OrderUseCases],
})
export class OrderUseCasesModule {}
