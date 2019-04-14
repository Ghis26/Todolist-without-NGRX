import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/todo';
import { Backend } from 'src/app/backend/backend.service';
import { TodoComponent } from '../todo/todo.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  private todos: Todo[];
  public todo: Todo;
  public todoId;
  constructor(private backendService: Backend, private router: Router, private location: Location ) { }

  ngOnInit() {
    this.backendService.getJson().subscribe(data => {
      this.todos = data;
      this.todoId = this.todos.length + 1;
      this.todo = { id: this.todoId, title : '', body: '', state : 'in progress' };
    });

  }

  public newTodo(): void {
    this.backendService.postJson(this.todo);
    this.router.navigate(['/']);
    location.reload();
  }

  public goBack() {
    this.location.back();
  }

}
