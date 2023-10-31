import { Router } from 'express';

import { Todo } from '../models/todos';

const router = Router();

let todos: Todo[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({todos: todos});
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todos.push(newTodo);
    res.status(201).json({message: "Added to do succesfully!", todo: newTodo, todos: todos});
});


router.put('/todo/:todoid', (req, res, next) => {
    const tid = req.params.todoid;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);

    if (todoIndex >= 0){
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({message: "Updated todo!", todos: todos});
    }
    res.status(404).json({message: "To do not found for the given id!"});
});

router.delete('/todo/:todoid', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoid);
    res.status(200).json({message: "Deleted todo!", todos: todos});
});

export default router;
