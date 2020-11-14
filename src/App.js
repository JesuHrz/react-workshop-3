import { useState, useCallback } from 'react'
import './App.css';

import Form from './Form'
import List from './List'

function App() {
  const [items, setItems] = useState([])

  const onSubmit = useCallback(ev => {
    ev.preventDefault()
    const { value } = ev.target.item

    setItems((prevItem) => {
      return [...prevItem, { id: new Date().getTime(), value }]
    })

    ev.target.reset()
  }, [])

  return (
    <div className="App">
      <Form onSubmit={onSubmit} />
      <List items={items} />
    </div>
  );
}

export default App;
