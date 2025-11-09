const { Router, application } = require("express");
const { v4: uuidv4 } = require("uuid");
const adminMiddleware = require("../middleware/user");
const router = Router();
let todos = []
// todo Routes
router.post('/posttodo', (req, res) => {
    // Implement todo creation logic
    const { todo, description } = req.body;

    if (!todo || !description) {
        return res.status(400).json({ msg: "Please send both todo and description" });
    }
    const newTodo = {
        id: uuidv4(),
        todo,
        description
    };

    todos.push(newTodo);

    res.status(201).json({
        message: "Todo created successfully",
        todo: newTodo
    });
});

router.put('/updatetodo/:id', adminMiddleware, (req, res) => {
    // Implement update todo  logic
    const { updatedTodoName, description } = req.body
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ msg: "Please send id" });
    }
    if (!updatedTodoName || !description) {
        return res.status(400).json({ msg: "Please send all fields" });
    }
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ msg: "Todo not found" });
    }
    todos[index] = {
        ...todos[index],
        todoName: updatedTodoName,
        description
    };

    return res.status(200).json({
        message: "Todo updated successfully",
        todo: todos[index]
    });
});

router.delete('/deletetodo', adminMiddleware, (req, res) => {
    // Implement delete todo logic
    todos = []
    return res.status(200).json({
        message: "All todos deleted successfully"
    });
});

router.delete('/:id', adminMiddleware, (req, res) => {
    // Implement delete todo by id logic
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ msg: "Please send id" });
    }
    const index = todos.findIndex(todos => todos.id === id)
    if (index === -1) {
        return res.status(404).json({ msg: "Todo not found" });
    }
    todos.splice(index, 1)

    return res.status(200).json({
        message: "Todo deleted successfully",

    });
});


router.get('/', adminMiddleware, (req, res) => {
    // Implement fetching all todo logic
    res.status(200).json({
        todos: todos, // or simply `todos` (ES6 shorthand)
        msg: "Fetched all todos successfully"
    });
});

router.get('/:id', adminMiddleware, (req, res) => {
    // Implement fetching todo by id logic
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ msg: "Please send id" });
    }

    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
        return res.status(404).json({ msg: "Todo not found" });
    }

    res.status(200).json({
        todo,
        msg: "Fetched todo by its id"
    });
});

module.exports = router;