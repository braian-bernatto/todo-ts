import React from 'react'
import { TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onToggleCompleted: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onToggleCompleted,
  onRemoveTodo
}) => {
  return (
    <div className='view'>
      <input
        type='checkbox'
        className='toggle'
        checked={completed}
        onChange={event =>
          onToggleCompleted({ id, completed: event?.target.checked })
        }
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => onRemoveTodo({ id })} />
    </div>
  )
}

export default Todo
