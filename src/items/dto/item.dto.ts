import { ApiProperty } from '@nestjs/swagger';
export class CreateItemDTO {
    @ApiProperty()
    readonly owner: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly vendorName: string;

    @ApiProperty()
    readonly image: string;

    @ApiProperty()
    readonly price: string;

    @ApiProperty()
    readonly createdAt: Date;
}