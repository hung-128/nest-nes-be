import { PartialType } from '@nestjs/swagger';
import { CreateQaDto } from './create-qa.dto';

export class UpdateQaDto extends PartialType(CreateQaDto) {}
