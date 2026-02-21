import { Controller,Get,Param } from '@nestjs/common';
import { EdgesService } from './edges.service';

@Controller('edges')
export class EdgesController {
  constructor(private readonly edgesService: EdgesService) {}

 @Get()
  getAllEdges() {
    return this.edgesService.findAll();
  }
  @Get(':id')
  getID(@Param('id') id: string) {
    return this.edgesService.findONE(Number(id));
  }

}
