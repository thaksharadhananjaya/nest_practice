
import { IsString, IsNotEmpty, IsEnum } from "class-validator";
import { TaskStatus } from "../interfaces/tasks.interface";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsEnum(TaskStatus)
    status: TaskStatus
}