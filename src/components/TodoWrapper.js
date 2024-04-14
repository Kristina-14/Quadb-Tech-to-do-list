import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid';
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]) //to store the todos
  
  //props to pass the data
  const addTodo = (todo) =>{
    setTodos([...todos, {id: uuidv4(), task: todo,
    completed: false, isEditing: false}])
    console.log(todos);
  }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo  task={todo} key={index}/>
      ))}
    </div>
  )
}

export default TodoWrapper