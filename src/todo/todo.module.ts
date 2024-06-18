import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../model/todo.schema';
import { Information, InformationSchema } from '../model/infomation.schema';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    MongooseModule.forFeature([{ name: Information.name, schema: InformationSchema }]),
  ],
})
export class TodoModule {}