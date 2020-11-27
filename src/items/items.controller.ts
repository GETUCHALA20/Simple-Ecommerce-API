import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ItemsService } from './items.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateItemDTO } from './dto/create-item.dto';

@ApiTags('items')
@ApiBearerAuth()
@Controller('items')
export class ItemsController {
    constructor(private itemService: ItemsService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async allItems(@Res() res,@Query('page') page){
        const options = {
            page: parseInt(page,10),
            limit: 9,
          }
        const news = await this.itemService.getAllItem(options);
        return res.status(HttpStatus.OK).json(news);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Res() res, @Body() createItemDTO:CreateItemDTO){
        const item = await this.itemService.addItem(createItemDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Item has been created successfully',
            item,
        });
    }

    @Get(":itemId")
    @UseGuards(JwtAuthGuard)
    @ApiParam({ name: 'itemId', type: String })
    async singleItem(@Res() res, @Param('itemId') itemId){
        const news = await this.itemService.getItem(itemId);
        if (!news) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json(news);
    }

    @Put(':itemId')
    @UseGuards(JwtAuthGuard)
    @ApiParam({ name: 'itemId', type: String })
    async updateItem(@Res() res, @Param('itemId') itemId, @Body() createItemDTO: CreateItemDTO){
        const item = await this.itemService.updateItem(itemId, createItemDTO);
        if (!item) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Item has been successfully updated',
            item,
        });
    }

    @Delete(":itemId")
    @UseGuards(JwtAuthGuard)
    @ApiParam({ name: 'itemId', type: String })
    async deleteItem(@Res() res, @Param('itemId') itemId){
        const item = await this.itemService.deleteItem(itemId);
        if (!item) {throw new NotFoundException('Item does not exist'); }
        return res.status(HttpStatus.OK).json({
            message: 'Item has been deleted',
            item,
        });
    }
}
