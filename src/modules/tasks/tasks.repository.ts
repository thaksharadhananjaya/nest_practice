import { PrismaService } from "nestjs-prisma";
import { CreateTaskDto } from "./dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepository{
    constructor(private prisma: PrismaService){}

    create(createTaskDto:CreateTaskDto){
        this.prisma.task.create({data:createTaskDto})
    }
}