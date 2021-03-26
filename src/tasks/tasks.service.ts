import { Injectable } from '@nestjs/common';
import { v1 as uuid} from 'uuid';
import { Task, TaskStatus } from './interface/tasks.interface'
@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[]{
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
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
