import './styles.css';
import{ Todo, TodoList } from './classes';
import {crearTodoHtml } from  './js/componentes';


export const todoList = new TodoList();
const tarea = new Todo('Aprender Javascrript');

todoList.todos.forEach(crearTodoHtml);

console.log(todoList);