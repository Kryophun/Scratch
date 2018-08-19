export class ToDo
{
    constructor(text: string, completed: boolean) { this.text = text; this.completed = completed; }

    readonly text: string;
    readonly completed: boolean;    
}