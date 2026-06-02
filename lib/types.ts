
export type Status = "To Do"|"In Progress"|"Completed"

export interface Task{
    id: string ;
    title: string;
    description: string;
    status:Status;
    dueDate: string;
}


    




