import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskFilterDto } from './dto/get-tasks-filter-dto';

import { Task, TaskStatus } from './interface/tasks.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getTasks(@Query()filterDto: TaskFilterDto): Task[]{
        if(Object.keys(filterDto).length){
            return this.tasksService.getTasksWithFilters(filterDto)
        } else {
            return this.tasksService.getAllTasks();
        }
    }
    @Get('/:id') //tasks/id
    getSpecificTask(@Param('id') id: string): Task{
        return this.tasksService.getSpecificTask(id);
    }
    @Post()
    createNewTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto)
    }
    @Delete('/:id')
    deleteTask(@Param('id') id: string){
        return this.tasksService.deleteTask(id);
    }
    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status')status: TaskStatus,
    ){
        return this.tasksService.updateTaskStatus(id, status)

    }
}
