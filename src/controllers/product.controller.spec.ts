import { Test, TestingModule } from "@nestjs/testing";
import { ProductController } from "./product.controller";
import { ProductUseCases } from "../use-cases/product/product-use-case";

describe("ProductController", () => {
  let controller: ProductController;
  
  const mockProductService = {
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
    delete: jest.fn((id) => null),
    getProductById: jest.fn((id) => {
      return {
        id
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductUseCases],
    })
      .overrideProvider(ProductUseCases)
      .useValue(mockProductService)
      .compile();

    controller = module.get<ProductController>(ProductController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should create a product", () => {
    const productDto = {
      name: "test",
      description: "123",
      price: 49.23,
    };

    expect(controller.createProduct(productDto)).toEqual({
      id: expect.any(Number),
      ...productDto,
    });

    expect(mockProductService.create).toHaveBeenCalledWith(productDto);
  });

  it("should update a client", async () => {
    const productDto = {
      name: "test",
      description: "123",
      price: 49.23,
    };

    expect(controller.updateProduct('1', productDto)).toEqual({
      id: 1,
      ...productDto,
    }); 
  });
  
  it("should delete a product", async () => {
    expect(controller.deleteProduct('1')).toEqual(undefined); 

    expect(mockProductService.delete).toHaveBeenCalled(); 
  });
  
  it("should find a product by id", async () => {
    expect(controller.getById('1')).toEqual({
      id: 1,
    }); 

    expect(mockProductService.getProductById).toHaveBeenCalled();
  });
});
