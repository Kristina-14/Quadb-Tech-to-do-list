import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const Todo = ({task}) => {
  return (
    <div className='Todo'>
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} className='trash-btn'/>
      </div>
    </div>
  )
}

export default Todo