import { TaskStatus } from "../interface/tasks.interface";

export class TaskFilterDto {
    status: TaskStatus;
    search: string;
}