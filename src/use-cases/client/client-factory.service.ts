import { Client } from '../../core/entities';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos';

export abstract class ClientFactoryService {
  static createNewClient(createClientDto: CreateClientDto) {
    const newClient = new Client();
    newClient.name = createClientDto.name;
    newClient.phone = createClientDto.phone;
    newClient.address = createClientDto.address;

    return newClient;
  }

  static updateClient(updateClientDto: UpdateClientDto) {
    const newClient = new Client();
    newClient.name = updateClientDto.name;
    newClient.phone = updateClientDto.phone;
    newClient.address = updateClientDto.address;

    return newClient;
  }
}
