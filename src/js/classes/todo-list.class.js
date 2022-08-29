import { Todo } from "./todo.class";

export class TodoList {
    

    constructor() {
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminiarTodo( id ) {
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for ( const todo of this.todos ) {
            if ( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminiarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    cargarLocalStorage() {
        this.todos = localStorage.getItem('todo') 
                    ? JSON.parse( localStorage.getItem('todo') ) 
                    : [];

        this.todos = this.todos.map( Todo.fromJson );
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
}