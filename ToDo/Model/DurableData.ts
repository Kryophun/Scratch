import { ToDo } from "./ToDo"

export class DurableData
{
    constructor(toDos: ToDo[]) { this.toDos = toDos; }

    readonly toDos: ToDo[];
}