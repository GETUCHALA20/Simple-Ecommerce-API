import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { use } from 'passport';
import { CartsService } from './carts.service';
import { CreateCartDTO } from './dto/create-cart.dto';

@ApiTags('Cart')
@ApiBearerAuth()
@Controller('cart')
export class CartsController {
    constructor(private cartsService: CartsService){}

    @Get(":userId")
    @ApiParam({ name: 'userid', type: String })
    async cartDetail(@Res() res, @Param('userId') userId){
        const cart = await this.cartsService.cartDetails(userId);
        return res.status(HttpStatus.OK).json(cart);
    }
    
    @Post('addItem')
    async addToCart(@Res() res, createCartDTO: CreateCartDTO){
        const userId = createCartDTO.owner;
        const itemId = createCartDTO.items[0].item;
        const quantity = parseInt(createCartDTO.items[0].quantity);
        const cart = await this.cartsService.addToCart(itemId,quantity,userId)
        return res.status(HttpStatus.OK).json(cart);
    }

    @Delete('removeItem/:itemId')
    async removeFromCart(@Res() res, @Param('itemId') itemId,@Body() userId){
        const cart = await this.cartsService.removeItemFromCart(itemId,userId);
        return res.status(HttpStatus.OK).json(cart);
    }

}
