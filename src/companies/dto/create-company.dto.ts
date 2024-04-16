import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
    id: string;
  
    type: string|null;
  
    name: string;

    facility_type: string|null;

    post_code: string;

    prefectures: string;

    address: string;

    phone_number: string;

    url: string|null;

    remark: string|null;

    service_plan_id: number;

    status: string|null;

    overview_service: string|null;

    constructor(data:any){
        this.id = data.company.id;
        this.type = data.company.type;
        this.name = data.company.name;
        this.facility_type = data.company.facility_type;
        this.post_code = data.company.post_code;
        this.prefectures = data.company.prefectures;
        this.address = data.company.address;
        this.phone_number = data.company.phone_number;
        this.url = data.company.url;
        this.remark = data.company.remark;
        this.service_plan_id = data.company.service_plan_id;
        this.status = data.company.status;
        this.overview_service = data.company.overview_service;
    }
}
