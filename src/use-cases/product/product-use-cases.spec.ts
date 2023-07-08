import { Test, TestingModule } from "@nestjs/testing";
import { ProductUseCases } from "./product-use-case";
import { IDataServices } from "../../core";

describe("ClientUseCases", () => {
  let productUseCase: ProductUseCases;

  const mockProductRepository = {
    products: {
      create: jest
        .fn()
        .mockImplementation((dto) => ({ id: Date.now(), ...dto })),
      update: jest.fn().mockImplementation((id, dto) => ({ id, ...dto })),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductUseCases,
        {
          provide: IDataServices,
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    productUseCase = module.get<ProductUseCases>(ProductUseCases);
  });

  it("should be defined", () => {
    expect(productUseCase).toBeDefined();
  });

  it("should create a new product and return record", async () => {
    const productDto = {
      name: "Banana",
      description: "Banana test",
      price: 389.02,
    };

    expect(await productUseCase.create(productDto)).toEqual({
      id: expect.any(Number),
      ...productDto,
    });
  });
});
