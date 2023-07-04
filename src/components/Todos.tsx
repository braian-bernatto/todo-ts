import React from 'react'
import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  onToggleCompleted: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: (id: TodoId) => void
}

const Todos: React.FC<Props> = ({ todos, onToggleCompleted, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos
