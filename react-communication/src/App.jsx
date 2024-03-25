import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllTodos } from './services/todosServices'


function App() {
 //Sates
const[todos, setTodos] = useState([])

 //Funcionalidad
const handleList  = async () => {
  setTodos(await getAllTodos())
}

const showTodos =  () => {
  return todos && todos.map( todo => <li key ={todo.id}>{todo.title}</li>)
}

useEffect( () => {
  handleList()
},[])


 //Return
  return (
    <div>
      <ul>
        {showTodos()}
      </ul>
    </div>
  )
}

export default App
