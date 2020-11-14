import React, { useEffect } from 'react'

function Item ({ value, ...props }) {
 
  useEffect(() => {
    console.warn('value', value)
  })

  return (
    <li>{value}</li>
  )
}

export default React.memo(Item, (prevProps, newProps) => {
  return prevProps.id === newProps.id
})
