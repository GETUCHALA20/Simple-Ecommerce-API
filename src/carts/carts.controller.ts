import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CartsService } from './carts.service';
import { CreateCartDTO } from './dto/create-cart.dto';

@ApiTags('Cart')
@ApiBearerAuth()
@Controller('cart')
export class CartsController {
    constructor(private cartsService: CartsService){}

    @Get(":userId")
    @ApiParam({ name: 'userid', type: String })
    @UseGuards(JwtAuthGuard)
    async cartDetail(@Res() res, @Param('userId') userId){
        const cart = await this.cartsService.cartDetails(userId);
        return res.status(HttpStatus.OK).json(cart);
    }
    
    @Post('addItem')
    @UseGuards(JwtAuthGuard)
    @ApiProperty({ type: () => CreateCartDTO })
    async addToCart(@Res() res, @Body() createCartDTO: CreateCartDTO){
        const userId = createCartDTO.owner;
        const itemId = createCartDTO.items[0].item;
        const quantity = parseInt(createCartDTO.items[0].quantity);
        const cart = await this.cartsService.addToCart(itemId,quantity,userId)
        return res.status(HttpStatus.OK).json(cart);
    }

    @Post('addBulk')
    @UseGuards(JwtAuthGuard)
    async addMultipleItemToCart(@Res() res,@Body() createCartDTO: CreateCartDTO){
        const cart = await this.cartsService.addMultipleItemToCart(createCartDTO);
        return res.status(HttpStatus.OK).json(cart);
    }

    @Delete('removeItem/:itemId')
    @UseGuards(JwtAuthGuard)
    async removeFromCart(@Res() res, @Param('itemId') itemId,@Body() userId){
        const cart = await this.cartsService.removeItemFromCart(itemId,userId);
        return res.status(HttpStatus.OK).json(cart);
    }

}
