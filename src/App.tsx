import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

const mockTodos = [
  { id: '1', title: 'Ver korra', completed: false },
  { id: '2', title: 'aprender a cantar', completed: false },
  { id: '3', title: 'conseguir nuevo trabajo', completed: true }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed } : todo
    )

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompleted={handleCompleted}
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
