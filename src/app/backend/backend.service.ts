import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class Backend {

    private jsonTodos = 'http://localhost:4200/assets/backend.json';

    constructor(private http: HttpClient) {
    }

    public getJson(): Observable<any> {
        return this.http.get(this.jsonTodos);
    }

    public putJson(todos) {
     console.log(JSON.stringify(todos));
     this.http.put(this.jsonTodos, JSON.stringify(todos), { headers: { 'Content-Type': 'application/json' } });
    }
}
