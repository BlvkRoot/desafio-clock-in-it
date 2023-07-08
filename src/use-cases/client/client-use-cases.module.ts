import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ClientUseCases } from './client-use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ClientUseCases],
  exports: [ClientUseCases],
})
export class ClientUseCasesModule {}
