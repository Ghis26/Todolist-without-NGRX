import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from '../../todo';
import { Backend } from '../../backend/backend.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  public todosInProgress;
  public todosDone;
  public isChecked = false;
  public todoId;

  constructor(private backendService: Backend) {
    this.backendService.getJson().subscribe((data) => {
      this.todos = data;
      this.getTotalTodos();
    });
  }

  ngOnInit() {
  }

  private getTotalTodos(): void {
    this.todosInProgress = 0;
    this.todosDone = 0;
    this.todos.forEach(todo => {
      if (todo.state === 'in progress') {
        this.todosInProgress++;
      } else if (todo.state === 'done') {
        this.todosDone++;
      }
    });
  }

  public validateTodo(id) {
    const index = id - 1;
    this.todos[index].state = 'done';
    this.backendService.putJson(this.todos);
    this.getTotalTodos();
  }

}
