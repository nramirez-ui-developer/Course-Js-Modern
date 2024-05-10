import html from "./app.html?raw";
import todoStore from "../store/todo.store";
import { renderTodos } from "./uses-cases";

const elementIDs = {
    TodoList: '.todo-list'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIDs.TodoList, todos );
    }

    // Cuando la función App() se llama
    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append( app );
        displayTodos();
    })();




}