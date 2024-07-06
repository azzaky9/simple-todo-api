import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Todo as TodoModel } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    await this.prisma.todo.create({ data: createTodoDto });
  }

  async findAll(): Promise<TodoModel[]> {
    const allTodo = await this.prisma.todo.findMany();
    return allTodo;
  }

  async filterByUserId(): Promise<TodoModel[] | null> {
    return null;
  }

  async findOne(id: number): Promise<TodoModel | null> {
    const result = await this.prisma.todo.findUnique({ where: { id } });
    return !!result ? result : null;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    await this.prisma.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    await this.prisma.todo.delete({ where: { id } });
  }
}
