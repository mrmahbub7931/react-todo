import React, { useState } from 'react'

export default function Form() {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(3)
  return (
    <form className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map( num => 
        (
          <option value={num} key={num}>{num}</option>
        )
        )}
        
      </select>
      <input type="text" placeholder='items...' value={description} onChange={e => setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
  )
}
