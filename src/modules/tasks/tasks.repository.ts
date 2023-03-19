import { PrismaService } from "nestjs-prisma";
import { CreateTaskDto } from "./dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskRepository{
    constructor(private prisma: PrismaService){}

    /**
     * add new task to database 
     * @param {CreateTaskDto}
     */
    create(createTaskDto:CreateTaskDto){
        this.prisma.task.create({data:createTaskDto})
    }
}