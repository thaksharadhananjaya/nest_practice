
/**
 * @fileoverview - uses Task interface for type checking when save & read tasks
 */

export interface Tasks {
    id: number,
    title: string,
    description: string,
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}