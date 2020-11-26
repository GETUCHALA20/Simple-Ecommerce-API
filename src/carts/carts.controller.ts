import { Controller, Get, Param, Post } from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {
    constructor(private cartsService: CartsService){}

    @Get(":userId")
    async cartDetail(@Param('userId') userId){}
    
    @Post('add')
    async addToCart(){}

    @Post('remove')
    async removeFromCart(){}

}
