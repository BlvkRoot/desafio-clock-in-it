import { IsString, IsNotEmpty, IsEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
  
  @IsString()
  @IsEmpty()
  address: string;
}

export class UpdateClientDto extends PartialType(CreateClientDto) {}
