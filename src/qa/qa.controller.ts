import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Res, UseInterceptors, UploadedFile, PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { QaService } from './qa.service';
import { CreateQaDto } from './dto/create-qa.dto';
import { UpdateQaDto } from './dto/update-qa.dto';
import { Response } from 'express';


@Controller('qa')
export class QaController {
  constructor(private readonly qaService: QaService) { }

  @Get('question/create')
  createView(@Body() createQaDto: CreateQaDto, @Res() res: Response) {
    return res.render('qa-create.hbs', { layout: 'layout_admin', title: 'QA Create Page' });
  }

  @Post('question/create')
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createQaDto: CreateQaDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file);
    return "123";
    return this.qaService.create(createQaDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    return res.render('qa-list.hbs', { layout: 'layout_admin', title: 'QA List Page' });
  }

  @Get('question/:id')
  questionDetail(@Param('id') id: string, @Res() res: Response) {
    return res.render('question-detail.hbs', { layout: 'layout_admin', title: 'Question Detail' });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQaDto: UpdateQaDto) {
    return this.qaService.update(+id, updateQaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qaService.remove(+id);
  }
}
