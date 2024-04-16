import { Injectable } from '@nestjs/common';
import { PayloadDTO } from './dto/create_payload.dto';
import { PrismaClient } from '@prisma/client';
import { time } from 'console';
const prisma = new PrismaClient()

@Injectable()
export class CompaniesService {
  create(PayloadDTO: PayloadDTO) {
    prisma.$transaction(async (tx) => {
      const company = tx.companies.create({
        data: {
          id: PayloadDTO.company.id,
          name: PayloadDTO.company.name,
          phone_number: PayloadDTO.company.phone_number,
          post_code: PayloadDTO.company.post_code,
          prefectures: PayloadDTO.company.prefectures,
          address: PayloadDTO.company.address,
          service_plan_id: PayloadDTO.company.service_plan_id,
          url: PayloadDTO.company.url,
          remark: PayloadDTO.company.remark
        }
      })
      
      const client = tx.users.create({
        data: {
          id: PayloadDTO.client.id,
          email: PayloadDTO.client.email,
          name: PayloadDTO.client.name,
          password: PayloadDTO.client.password,
          primary_phone_number: PayloadDTO.client.primary_phone_number,
          secondary_phone_number: PayloadDTO.client.secondary_phone_number,
          name_katakana: PayloadDTO.client.name_furigana
        } 
      })
    })

    console.log(PayloadDTO);
    return 'This action adds a new company';
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  // update(id: number, updateCompanyDto: UpdateCompanyDto) {
  //   return `This action updates a #${id} company`;
  // }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }

  generateUniqueUserId(): string {
    const prefix = Date.now();
    console.log(prefix)
    const randomPart = Math.random().toString(36).substring(2, 8);
    return prefix + randomPart;
  }
}
