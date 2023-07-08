import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateClientDto, UpdateClientDto } from '../../core/dtos';
import { ClientFactoryService } from './client-factory.service';

@Injectable()
export class ClientUseCases {
  constructor(
    private dataServices: IDataServices
  ) {}

  async getAllClients(): Promise<Client[]> {
    return this.dataServices.clients.getAll();
  }

  async getClientById(id: any): Promise<Client> {
    return this.findById(id);
  }

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const client = ClientFactoryService.createNewClient(createClientDto);
    return this.dataServices.clients.create(client);
  }
  
  async update(
    clientId: number,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const client = await this.findById(clientId);
    Object.assign(client, updateClientDto);

    return this.dataServices.clients.update(clientId, client);
  }

  async delete(
    clientId: number
  ): Promise<void> {
    const client = await this.findById(clientId);

    await this.dataServices.clients.delete(clientId, client);
  }

  async findById(clientId: number): Promise<Client> {
    const client = await this.dataServices.clients.findOne(clientId);

    if(!client) throw new NotFoundException(`Client ${clientId} does not exist`);
    return client;
  }
}
