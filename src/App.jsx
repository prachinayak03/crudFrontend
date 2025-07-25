import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './Component/User'
import CreateUser from './Component/CreateUser'
import Update from './Component/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<User/>}></Route>
      <Route path='/create'element={<CreateUser/>}></Route>
      <Route path='/update/:id'element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
