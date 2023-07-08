import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ProductUseCases } from './product-use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ProductUseCases],
  exports: [ProductUseCases],
})
export class ProductUseCasesModule {}
