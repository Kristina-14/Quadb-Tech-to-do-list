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

  // function to handle the completion of the task
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo, completed: !todo.completed} : todo))
  }

  //function to delete the task
  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Finish up!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo task={todo} key={index}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoWrapper