import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
    id: number;
    name: string;
    name_furigana: string;
    primary_phone_number: string;
    secondary_phone_number: string;
    email: string;
    password: string;

    constructor(data: any) {
        this.id = data.client.id;
        this.name = data.client.name;
        this.name_furigana = data.client.name_furigana;
        this.primary_phone_number = data.client.primary_phone_number;
        this.secondary_phone_number = data.client.secondary_phone_number;
        this.email = data.client.email;
        this.password = data.client.password;
    }
}
