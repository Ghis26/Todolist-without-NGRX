import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { Backend } from '../../backend/backend.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  public todosInProgress = 0;
  public todosDone = 0;

  constructor(private backendService: Backend) {
    this.backendService.getJson().subscribe((data) => {
      this.todos = data;
      this.getTotalTodos();
    });
  }

  ngOnInit() {
  }

  private getTotalTodos(): void {
    this.todos.forEach(todo => {
      if (todo.state === 'in progress') {
        this.todosInProgress++;
      } else if (todo.state === 'done') {
        this.todosDone++;
      }
    });
  }

}
