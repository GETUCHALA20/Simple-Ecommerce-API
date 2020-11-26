import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { CartsService } from './carts.service';

@ApiTags('Cart')
@ApiBearerAuth()
@Controller('carts')
export class CartsController {
    constructor(private cartsService: CartsService){}

    @Get(":userId")
    @ApiParam({ name: 'userid', type: String })
    async cartDetail(@Param('userId') userId){}
    
    @Post('add')
    async addToCart(){}

    @Post('remove')
    async removeFromCart(){}

}
