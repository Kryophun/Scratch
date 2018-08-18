import * as  "../VisibilityFilter"

interface IAction
{
    type: string;
}

const ADD_TODO: string = 'ADD_TODO'
class AddTodo implements IAction
{
    constructor(todoText: string) { this.text = todoText; }

    type: string = ADD_TODO;
    text: string;
}

const TOGGLE_TODO: string = 'TOGGLE_TODO'
class ToggleTodo implements IAction
{
    type: string = TOGGLE_TODO;
}

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
class SetVisibilityFilter implements IAction
{
    constructor(filter: VisibilityFilter) { this.filter = filter; }

    type: string = SET_VISIBILITY_FILTER;
    filter: VisibilityFilter;
}