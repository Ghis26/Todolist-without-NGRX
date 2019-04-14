export class Todo {

    id: number;
    title: string;
    body: string;
    state: string;

    constructor() {
        this.id = 0;
        this.title = '';
        this.body = '';
        this.state =  'in progress';
     }
}
