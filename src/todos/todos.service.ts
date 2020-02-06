import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
    todos: Todo[] = [{
        id: 1,
        title: "NestJS",
        description: "A NodeJS framework",
        done: true
    }, {
        id: 2,
        title: "React",
        description: "A Javascript front-end framework",
        done: false
    }];

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: string) {
        return this.todos.find(todo => todo.id === Number(id))
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo];
    }
}
