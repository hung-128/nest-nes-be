import { CreateCompanyDto } from "./create-company.dto";
import { CreateClientDto } from "./create-client.dto";

export class PayloadDTO{
    company: CreateCompanyDto
    client: CreateClientDto

    constructor(data:any){
        this.company = new CreateCompanyDto(data)
        this.client = new CreateClientDto(data)
    }
}