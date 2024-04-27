import React from 'react'

export default function PackingList() {
  return (
    <div className='list'>
      <ul>
        <li style={{textDecoration: 'line-through'}}>
            <input type="checkbox"  />
            <span>2 Passports</span>
            <button>❌</button>
        </li>
        <li>
            <input type="checkbox"  />
            <span>12 Socks</span>
            <button>❌</button>
        </li>
        <li style={{textDecoration: 'line-through'}}>
            <input type="checkbox"  />
            <span>1 Charger</span>
            <button>❌</button>
        </li>
      </ul>
    </div>
  )
}
