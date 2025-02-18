import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListTodoComponent from './components/ListTodoComponent'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoComponent from './components/TodoComponent';
import RegistrationComponent from './components/RegistrationComponent';
import LoginComponent from './components/LoginComponent';
import { isUserLoggedIn } from './services/AuthService';

function App() {

  function AuthenticatedRoute({ children }) {

    const isAuth = isUserLoggedIn();

    if (isAuth) {
      return children
    } else {
      return <Navigate to="/" />
    }

  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>


          {/* http:localhost:8080 */}
          <Route path="/" element={<LoginComponent />}></Route>

          {/* http:localhost:8080/todos */}
          <Route path="/todos" element={
            <AuthenticatedRoute> <ListTodoComponent /> </AuthenticatedRoute>
          }></Route>

          {/* http:localhost:8080/add-todo */}
          <Route path='/add-todo' element={
            <AuthenticatedRoute> <TodoComponent /> </AuthenticatedRoute>
          }></Route>

          {/* http:localhost:8080/update-todo/{id} */}
          <Route path='/update-todo/:id' element={
            <AuthenticatedRoute><TodoComponent /></AuthenticatedRoute>
          }></Route>

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
