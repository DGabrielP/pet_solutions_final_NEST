
import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime/library";

export class CreateProductDto {
@ApiProperty()
comercial_name:string;

@ApiProperty({required: false})
description:string;

@ApiProperty()
model:string;

@ApiProperty({default: 0})
stock:number;

@ApiProperty()
price:Decimal;


}