/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todo,index){
    this.todo = [];
    this.index = 0;
  }
  add(todo){
      this.todo.push(todo)
  }
  remove(index){
    if(index < 0 && index > this.todo.length) throw new Error ("Invalid index ...")
      this.todo.splice(index,1)
  }
  update(index, updatedTodo){
    if(index < 0 && index > this.todo.length) throw new Error ("Invalid index ...")
      this.todo[index] = updatedTodo
  }
  getAll(){
    return this.todo;
  }
  get(indexOfTodo){
      if(indexOfTodo < 0 && indexOfTodo > this.todo.length) throw new Error ("Invalid index ...")
        return this.todo[indexOfTodo]
  }
  clear(){
    this.todo = []
  }
}
const mytodo = new Todo
mytodo.add("Go to the gym")
mytodo.add("Solve Assignments")
mytodo.remove(0)
// mytodo.update(1,"Solve week 2 assignment")

console.log(mytodo.getAll());

module.exports = Todo;
