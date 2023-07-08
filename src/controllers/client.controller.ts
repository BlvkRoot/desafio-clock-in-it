import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode
} from "@nestjs/common";
import { CreateClientDto, UpdateClientDto } from "../core/dtos";
import { ClientUseCases } from "../use-cases/client/client-use-case";

@Controller("api/clients")
export class ClientController {
  constructor(private clientUseCases: ClientUseCases) {}

  @Get()
  async getAll() {
    return this.clientUseCases.getAllClients();
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.clientUseCases.getClientById(+id);
  }

  @Post()
  createClient(@Body() clientDto: CreateClientDto) {
    return this.clientUseCases.create(clientDto);
  }

  @Put(":id")
  updateClient(
    @Param("id") id: string,
    @Body() updateClientDto: UpdateClientDto
  ) {
    return this.clientUseCases.update(+id, updateClientDto);
  }

  @Delete(":id")
  @HttpCode(204)
  deleteClient(
    @Param("id") id: string
  ) {
    this.clientUseCases.delete(+id);
  }
}
