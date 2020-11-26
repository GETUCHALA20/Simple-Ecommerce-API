import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDTO {
    @ApiProperty()
    readonly owner: string;

    @ApiProperty()
    readonly items: [{item:string,quantity:string}];
    
    @ApiProperty()
    readonly createdAt: Date;

}