export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

//The list of status (enum = enumerated) that we want to allow
export enum TaskStatus {
    OPEN= 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}