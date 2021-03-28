import { Injectable } from '@nestjs/common';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskFilterDto } from './dto/get-tasks-filter-dto';
import { Task, TaskStatus } from './interface/tasks.interface'

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTasksWithFilters(filterDto: TaskFilterDto): Task[]{
        const { status, search } = filterDto
        let tasks = this.getAllTasks()
        if(status){
            tasks = tasks.filter(task => task.status === status);
        }
        if(search){
            tasks = tasks.filter(task =>
                task.title.includes(search) || task.description.includes(search)
                )
        };
        return tasks
    }
    createTask(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto; 
        const task: Task = {
            title,
            description,
            status: TaskStatus.OPEN,
            id: uuid()
        };

        this.tasks.push(task);
        //Return the newly created resource. It's a good practice. Front end purposes.
        return task;
    }
  

    getSpecificTask(taskId: string): Task {
        return this.tasks.find(task => task.id === taskId)
    }

    updateTaskStatus(id: string, status: TaskStatus) {
    
        const task = this.getSpecificTask(id);
        task.status = status;
        return task;
    }

    //If there are no returns, void
    deleteTask(taskId: string): void {
        this.tasks= this.tasks.filter(task => task.id !== taskId)
    }
}
