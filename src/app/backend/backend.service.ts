import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class Backend {

    private jsonTodos = 'http://localhost:3000/todos';

    constructor(private http: HttpClient) {
    }

    public getJson(): Observable<any> {
        return this.http.get(this.jsonTodos);
    }

    public postJson(newTodo) {
        return this.http.post(`${this.jsonTodos}`, JSON.stringify(newTodo), { headers: { 'Content-Type': 'application/json' } })
        .toPromise();
    }

    public putJson(todo) {
        return this.http.put(`${this.jsonTodos}/${todo.id}`, JSON.stringify(todo),
        { headers: { 'Content-Type': 'application/json' } }).toPromise();
    }

    public deleteJson(id) {
        return this.http.delete(`${this.jsonTodos}/${id}`).toPromise();
    }
}
