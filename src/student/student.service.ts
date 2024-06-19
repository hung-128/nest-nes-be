import { Injectable , Inject} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { PutCommandInput } from '@aws-sdk/lib-dynamodb';


@Injectable()
export class StudentService {
  constructor(
    @Inject('DYNAMODB') private readonly dynamoDbClient: DocumentClient,
  ) {}
  
  async create(createStudentDto: CreateStudentDto): Promise<void> {
    try {
      const putStudentParams: PutCommandInput = {
        TableName: 'Student',
        Item: {
          class_name: createStudentDto.class_name,
          first_name: createStudentDto.first_name,
          last_name: createStudentDto.last_name
        }
      }
      await this.dynamoDbClient.put(putStudentParams).promise();
    } catch (error) {
      console.error('Error putting item into DynamoDB:', error);
      throw error;
    }
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
