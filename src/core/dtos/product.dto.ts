import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
  
  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
