import { ApiProperty } from "@nestjs/swagger";
import { CreateItemDTO } from "src/items/dto/create-item.dto";

export class CreateCartDTO {
     owner: string;
     @ApiProperty({ type: () => [CreateItemDTO] })
     items: [{item:string,quantity:string}];
     createdAt?: Date;
}