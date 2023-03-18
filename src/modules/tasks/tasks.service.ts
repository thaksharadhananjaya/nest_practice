import { Injectable, NotFoundException } from '@nestjs/common';
import { Tasks, TaskStatus } from './interfaces';
import { CreateTaskDto, UpdateTaskDto } from './dto/index';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
    private tasks: Tasks[] = [];

    constructor(private taskRepository: TaskRepository) { }

    /**
     * Get all tasks
     */
    getAllTasks(): Tasks[] {
        return this.tasks;
    }

    /**
     * create a new task
     * @parm {CreateTaskDto}
     */
    createTask(createTaskDto: CreateTaskDto): Tasks {
        const { title, description, status } = createTaskDto;
        const task: Tasks = {
            id: Math.floor(Math.random() * 1000),
            description,
            title,
            status
        }
        this.tasks.push(task);
        this.taskRepository.create(createTaskDto);
        return task;
    }

    /**
     * delete a task
     * @parm {number}
     */
    deleteTask(id: number): boolean {

        const index: number = this.tasks.findIndex(task => task.id === id);
        if (index < 0) {
            throw new NotFoundException(`Task ID "${id}" not found`);
        }

        this.tasks.splice(index, 1);
        return true;
    }

    /**
     * update task
     * @parm {number}
     * @parm {CreateTaskDto}
     */
    updateTask(id: number, updateTask: UpdateTaskDto): Tasks {
        const { title, description, status } = updateTask;
        const index: number = this.tasks.findIndex(task => task.id === id);

        if (index < 0) {
            throw new NotFoundException(`Task ID "${id}" not found`);
        }

        this.tasks[index].title = title;
        this.tasks[index].description = description;
        if (status) this.tasks[index].status = status;
        return this.tasks[index];
    }
}
