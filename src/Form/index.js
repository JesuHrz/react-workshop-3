import React from 'react'

function Form ({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='item' />
      <input type='submit' name='ADD' />
    </form>
  )
}

export default React.memo(Form)
