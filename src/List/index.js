import { useEffect } from 'react'
import Item from './Item'

function List ({ items }) {
  return (
    <ul>
      {
        items.map(({ id, value, ...props }, i) => (
          <Item
            key={i}
            id={id}
            value={value}
            extraProps={props}
          />
        ))
      }
    </ul>
  )
}

export default List
