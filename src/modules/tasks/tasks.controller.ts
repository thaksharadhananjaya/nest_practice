
import { Controller, Get, Post, Body, Patch, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tasks } from './interfaces';
import { CreateTaskDto, UpdateTaskDto } from './dto/index';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    @Get()
    getAllTasks(): Tasks[] {
        return this.taskService.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Tasks {
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number): boolean {
        return this.taskService.deleteTask(id);
    }

    @Patch('/:id')
    updateTask(@Param('id', ParseIntPipe) id: number,
        @Body() updateTask: UpdateTaskDto): Tasks {
        return this.taskService.updateTask(id, updateTask);
    }
}
