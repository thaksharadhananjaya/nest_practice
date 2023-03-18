import { IsNotEmpty, IsString, IsEnum, IsOptional } from "class-validator";
import { TaskStatus } from "../interfaces/tasks.interface";

export class UpdateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsEnum(TaskStatus)
    @IsOptional()
    status?: TaskStatus
}