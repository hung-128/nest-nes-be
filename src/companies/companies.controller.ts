import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PayloadDTO } from './dto/create_payload.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor'; 
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
@Controller('companies')
@UseInterceptors(LoggingInterceptor)
@UseInterceptors(TransformInterceptor)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) { }

  @Post()
  create(@Body() PayloadDTO: PayloadDTO) {
    const company = this.companiesService.create(PayloadDTO);
    return company;
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
  //   return this.companiesService.update(+id, updateCompanyDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }

}
