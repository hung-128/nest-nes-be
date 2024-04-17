import { Injectable } from '@nestjs/common';
import { PayloadDTO } from './dto/create_payload.dto';
import { PrismaClient } from '@prisma/client';
import * as dayjs from 'dayjs'

const prisma = new PrismaClient()

@Injectable()
export class CompaniesService {
	async create(PayloadDTO: PayloadDTO) {
		return prisma.$transaction(async (tx) => {
			const lastCompany = await tx.companies.findFirst({
				select: {
					id: true
				},
				orderBy: {
					created_at: 'desc'
				},
			})
			
			let order = 1;
			if (lastCompany) {
				order = parseInt(lastCompany.id.split('-').pop()) + 1
			}
			const id = this.generateUniqueUserId(order);
			console.log(id);
			return await tx.companies.create({
				select: {
					id: true,
					name: true,
					users_users_company_idTocompanies: {
						select: {
							name: true
						}
					}
				},
				data: {
					id: id,
					name: PayloadDTO.company.name,
					phone_number: PayloadDTO.company.phone_number,
					post_code: PayloadDTO.company.post_code,
					prefectures: PayloadDTO.company.prefectures,
					address: PayloadDTO.company.address,
					service_plan_id: PayloadDTO.company.service_plan_id,
					url: PayloadDTO.company.url,
					remark: PayloadDTO.company.remark,
					users_users_company_idTocompanies :{
						create: {
							email: PayloadDTO.client.email,
							name: PayloadDTO.client.name,
							password: PayloadDTO.client.password,
							primary_phone_number: PayloadDTO.client.primary_phone_number,
							secondary_phone_number: PayloadDTO.client.secondary_phone_number,
							name_katakana: PayloadDTO.client.name_furigana,
						}
					}
				}
			})
		})
		
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

	generateUniqueUserId(order:number): string {
		let numberToString = order.toString();
		if (numberToString.length == 2) {
			numberToString = '0' + numberToString
		}
		else if(numberToString.length == 1){
			numberToString = '00' +numberToString
		}
		let now = dayjs();
		const formattedDate = now.format('YYYYMMDD');

		return formattedDate + '-' + numberToString
	}
}
