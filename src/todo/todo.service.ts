import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from '../model/todo.schema';
import { Information, InformationDocument } from '../model/infomation.schema'


@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
    @InjectModel(Information.name) private readonly informationModel: Model<InformationDocument>,

  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const information = await new this.informationModel({
        ...createTodoDto.information,
        createdAt: new Date(),
      }).save();
    console.log(information);
    
    let todoData = {
        title: createTodoDto.title,
        description: createTodoDto.description
    }
    return await new this.model({
      ...todoData,
      information: information._id,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}