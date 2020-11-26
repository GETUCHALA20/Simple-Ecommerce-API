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
    async create(@Res() res, @UploadedFile() file, @Body() createItemDTO:CreateItemDTO){
        const item = await this.itemService.addItem(createItemDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Item has been created successfully',
            item,
        });
    }

    @Get(":id")
    @UseGuards(JwtAuthGuard)
    @ApiParam({ name: 'id', type: String })
    async singleItem(@Res() res, @Param('id') id){
        const news = await this.itemService.getItem(id);
        if (!news) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json(news);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    @ApiParam({ name: 'id', type: String })
    async updateItem(@Res() res, @Param('id') id, @UploadedFile() file, @Body() createItemDTO: CreateItemDTO){
        const item = await this.itemService.updateItem(id, createItemDTO);
        if (!item) { throw new NotFoundException('Item does not exist!'); }
        return res.status(HttpStatus.OK).json({
            message: 'Item has been successfully updated',
            item,
        });
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard)
    @ApiParam({ name: 'id', type: String })
    async deleteItem(@Res() res, @Param('id') id){
        const item = await this.itemService.deleteItem(id);
        if (!item) {throw new NotFoundException('Item does not exist'); }
        return res.status(HttpStatus.OK).json({
            message: 'Item has been deleted',
            item,
        });
    }
}
