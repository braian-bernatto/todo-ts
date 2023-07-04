import React from 'react'
import { FILTERS_BUTTONS, TODO_FILTERS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='filters'>
      <li>
        <a
          className={`${filterSelected === 'all' ? 'selected' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'active' ? 'selected' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Activos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selected' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completados
        </a>
      </li>
    </ul>
  )
}

export default Filters
