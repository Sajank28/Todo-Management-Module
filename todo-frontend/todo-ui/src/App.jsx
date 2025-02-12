import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoComponent from './components/TodoComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* http:localhost:3000 */}
          <Route path="/" element={<ListTodoComponent />}></Route>

          {/* http:localhost:3000/api/todos */}
          <Route path="/api/todos" element={<ListTodoComponent />}></Route>

          {/* http:localhost:3000/add-todo */}
          <Route path='/add-todo' element={<TodoComponent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
