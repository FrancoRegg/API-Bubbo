export interface Task {
    title: String;
    description: string;
    status:'pending' | 'in progress' | 'done'
}