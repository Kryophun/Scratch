import * as Actions from "../Actions/actions"
import { ApplicationState } from "../ApplicationState"
import { UiState } from "../UIState";
import { VisibilityFilter } from "../VisibilityFilter";
import { DurableData } from "../DurableData";
import { ToDo } from "../ToDo";

const defaultApplicationState = new ApplicationState(new UiState(VisibilityFilter.SHOW_ACTIVE), new DurableData([]));

function setVisibilityFilter(currentVisibilityFilter: VisibilityFilter = VisibilityFilter.SHOW_ALL, action: Actions.IAction)
{
    if (action.type === Actions.SET_VISIBILITY_FILTER)
    {
        return (action as Actions.SetVisibilityFilter).filter;
    }
    else
    {
        return currentVisibilityFilter;
    }
}

function handleToDoActions(currentToDoList: ToDo[] = [], action: Actions.IAction)
{
    switch (action.type)
    {
        case Actions.ADD_TODO:
            return [...currentToDoList, new ToDo((action as Actions.AddTodo).text, false)];

        case Actions.TOGGLE_TODO:
            const toggleTodoAction = action as Actions.ToggleTodo;
            return currentToDoList.map((
                (toDo, index) => {
                    if (index === toggleTodoAction.index) {
                        return new ToDo(toDo.text, !toDo.completed);
                    }
                    else
                    {
                        return toDo;
                    }
                }
            ))
    
        default:
            return currentToDoList;
    }
}

function handleUiStateActions(currentUiState: UiState, action: Actions.IAction) : UiState
{
    return new UiState(setVisibilityFilter(currentUiState.visibilityFilter, action));
}

function handleDurableDataActions(currentDurableData: DurableData, action: Actions.IAction) : DurableData
{
    return new DurableData(handleToDoActions(currentDurableData.toDos, action));
}

function todoApp(currentApplicationState: ApplicationState, action: Actions.IAction)
{
    return new ApplicationState(
        handleUiStateActions(currentApplicationState.uiState, action),
        handleDurableDataActions(currentApplicationState.durableData, action)
    );
}