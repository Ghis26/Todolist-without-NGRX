import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { ActivatedRoute } from '@angular/router';
import { Backend } from 'src/app/backend/backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todoId = 0;
  public todo: Todo;
  public todosJson: Todo[];

  constructor(private route: ActivatedRoute, private backendService: Backend, private location: Location) {
   }

  ngOnInit() {
    this.getTodoById();
  }

private getTodoById(): void {
  this.todoId = this.route.snapshot.params.id;

  this.backendService.getJson().subscribe( data =>  {
    this.todosJson = data;
    this.todo = this.todosJson[this.todoId - 1 ];
  });
}

public goBack(): void {
  this.location.back();
}
}
