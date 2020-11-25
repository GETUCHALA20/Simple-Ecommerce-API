import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDTO {
    @ApiProperty()
    readonly owner: string;

    @ApiProperty()
    readonly totalPrice: number;

    @ApiProperty()
    readonly items: [{item:string,quantity:string}];
    
    @ApiProperty()
    readonly createdAt: Date;

}