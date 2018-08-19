import { VisibilityFilter } from  "../VisibilityFilter"

export interface IAction
{
    type: string;
}

export const ADD_TODO: string = 'ADD_TODO'
export class AddTodo implements IAction
{
    constructor(todoText: string) { this.text = todoText; }

    type: string = ADD_TODO;
    text: string;
}

export const TOGGLE_TODO: string = 'TOGGLE_TODO'
export class ToggleTodo implements IAction
{
    constructor(indexOfTodo: number) { this.index = indexOfTodo; }

    type: string = TOGGLE_TODO;
    index: number;
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export class SetVisibilityFilter implements IAction
{
    constructor(filter: VisibilityFilter) { this.filter = filter; }

    type: string = SET_VISIBILITY_FILTER;
    filter: VisibilityFilter;
}