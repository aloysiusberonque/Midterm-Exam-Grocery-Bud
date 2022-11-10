import { useState } from 'react'
import List from './List';
import './App.css'

function App() {
  return (
    <section>
      <div>
        <h3>Grocery Bud</h3>
        <div>
          <input></input>
          <button>Submit</button>
        </div>
      </div>
      <div>
        <List />
        <List />
        <List />
        <button>Clear Items</button>
      </div>
    </section>
  )
}

export default App
