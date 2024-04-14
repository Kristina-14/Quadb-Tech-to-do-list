import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault(); //to prevent the page from refreshing
        //console.log(value);
        addTodo(value);

        //to clear the data after adding it to the task list.
        setValue("");
    
    }
  return (
    <form className='TodoForm' onSubmit = {handleSubmit}>

        <input type='text' className='todo-input'
        value={value}
        placeholder="Add your today's task!"  onChange = {(e) => setValue(e.target.value)}/>  {/* //to hold the user input */}
       

        <button className='todo-btn' type='submit'>
            Add Task
        </button>

    </form>
  )
}

export default TodoForm