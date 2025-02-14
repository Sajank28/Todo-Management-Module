import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>


          {/* http:localhost:8080 */}
          <Route path="/" element={<ListTodoComponent />}></Route>

          {/* http:localhost:8080/todos */}
          <Route path="/todos" element={<ListTodoComponent />}></Route>

          {/* http:localhost:8080/add-todo */}
          <Route path='/add-todo' element={<TodoComponent />}></Route>

          {/* http:localhost:8080/update-todo/{id} */}
          <Route path='/update-todo/:id' element={<TodoComponent />}></Route>


          {/* http:localhost:8080/register */}
          <Route path='/register' element={<RegistrationComponent />}></Route>

          {/* http:localhost:8080/login */}
          <Route path='/login' element={<LoginComponent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
