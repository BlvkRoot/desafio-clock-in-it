import { Test, TestingModule } from "@nestjs/testing";
import { ClientUseCases } from "./client-use-case";
import { Client, IDataServices } from "../../core";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("ClientUseCases", () => {
  let clientUseCase: ClientUseCases;

  const mockClientRepository = {
    clients: {
      create: jest.fn().mockImplementation((dto) => ({ id: Date.now(), ...dto })),
      update: jest.fn().mockImplementation((id, dto) => ({ id, ...dto })),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientUseCases,
        {
          provide: IDataServices,
          useValue: mockClientRepository,
        },
      ],
    }).compile();

    clientUseCase = module.get<ClientUseCases>(ClientUseCases);
  });

  it("should be defined", () => {
    expect(clientUseCase).toBeDefined();
  });

  it("should create a new client and return record", async () => {
    const clientDto = {
      name: "John Doe",
      phone: "12345",
      address: "38 Main Street",
    };
    
    expect(await clientUseCase.create(clientDto)).toEqual({
      id: expect.any(Number),
      ...clientDto,
    });
  });

});
