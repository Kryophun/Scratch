"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(todoText) {
        this.type = ADD_TODO;
        this.text = todoText;
    }
    return AddTodo;
}());
var TOGGLE_TODO = 'TOGGLE_TODO';
var ToggleTodo = /** @class */ (function () {
    function ToggleTodo() {
        this.type = TOGGLE_TODO;
    }
    return ToggleTodo;
}());
var SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var SetVisibilityFilter = /** @class */ (function () {
    function SetVisibilityFilter(filter) {
        this.type = SET_VISIBILITY_FILTER;
        this.filter = filter;
    }
    return SetVisibilityFilter;
}());
