import { Test, TestingModule } from "@nestjs/testing";
import { ClientController } from "./client.controller";
import { ClientUseCases } from "../use-cases/client/client-use-case";

describe("ClientController", () => {
  let controller: ClientController;
  
  const mockClientService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    update: jest.fn((id, dto) => {
      return {
        id,
        ...dto,
      };
    }),
    delete: jest.fn((id) => {}),
    getClientById: jest.fn((id) => {
      return {
        id
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientUseCases],
    })
      .overrideProvider(ClientUseCases)
      .useValue(mockClientService)
      .compile();

    controller = module.get<ClientController>(ClientController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should create a client", () => {
    const clientDto = {
      name: "test",
      phone: "123",
      address: "77 Main Street",
    };

    expect(controller.createClient(clientDto)).toEqual({
      id: expect.any(Number),
      ...clientDto,
    });

    expect(mockClientService.create).toHaveBeenCalledWith(clientDto);
  });

  it("should update a client", async () => {
    const clientDto = {
      name: "test",
      phone: "123",
      address: "77 Main Street",
    };

    expect(controller.updateClient('1', clientDto)).toEqual({
      id: 1,
      ...clientDto,
    }); 
  });
  
  it("should delete a client", async () => {
    expect(controller.deleteClient('1')).toEqual(undefined); 

    expect(mockClientService.delete).toHaveBeenCalled(); 
  });
  
  it("should find a client by id", async () => {
    expect(controller.getById('1')).toEqual({
      id: 1,
    }); 

    expect(mockClientService.getClientById).toHaveBeenCalled();
  });
});
