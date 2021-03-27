import { Injectable } from '@nestjs/common';
import { v1 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './interface/tasks.interface'
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
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
}
