import { IsNotEmpty, IsOptional, IsISO8601, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsISO8601()
  dueDate: Date;
}
