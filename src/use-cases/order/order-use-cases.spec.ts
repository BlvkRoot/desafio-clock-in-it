import { Test, TestingModule } from "@nestjs/testing";
import { OrderUseCases } from "./order-use-case";
import { IDataServices } from "../../core";

describe("ClientUseCases", () => {
  let orderUseCase: OrderUseCases;

  const mockOrderRepository = {
    orders: {
      create: jest
        .fn()
        .mockImplementation((dto) => ({ id: Date.now(), ...dto })),
      update: jest.fn().mockImplementation((id, dto) => ({ id, ...dto })),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderUseCases,
        {
          provide: IDataServices,
          useValue: mockOrderRepository,
        },
      ],
    }).compile();

    orderUseCase = module.get<OrderUseCases>(OrderUseCases);
  });

  it("should be defined", () => {
    expect(orderUseCase).toBeDefined();
  });

  it("should create a new order and return record", async () => {
    const orderDto = {
      clientId: 1,
      productId: 3,
    };

    expect(await orderUseCase.create(orderDto)).toEqual({
      id: expect.any(Number),
      clientId: orderDto.clientId,
      productId: orderDto.productId,
    });
  });
});
