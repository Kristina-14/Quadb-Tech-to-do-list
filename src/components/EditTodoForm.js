import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task); //initail value will be the old task that we want to update

    const handleSubmit = (e) =>{
        e.preventDefault(); //to prevent the page from refreshing
        //console.log(value);
        editTodo(value, task.id);

        //to clear the data after adding it to the task list.
        setValue("");
    
    }
  return (
    <form className='TodoForm' onSubmit = {handleSubmit}>

        <input type='text' className='todo-input'
        value={value}
        placeholder="Update your task, here!"  onChange = {(e) => setValue(e.target.value)}/>  {/* //to hold the user input */}
       

        <button className='todo-btn' type='submit'>
            Update Task
        </button>

    </form>
  )
}

export default EditTodoForm