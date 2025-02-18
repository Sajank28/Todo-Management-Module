import React, { useState, useEffect } from 'react'
import { getAllTodos, deleteTodo, complete, inComplete } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'
import { isAdminUser } from '../services/AuthService'

const ListTodoComponent = () => {

    // const dummyData = [
    //     {
    //         "id": 1,
    //         "title": "React Course",
    //         "description": "This is a paid react course module",
    //         "completed": false
    //     },
    //     {
    //         "id": 2,
    //         "title": "React ",
    //         "description": "This is a paid react course module",
    //         "completed": false
    //     },
    //     {
    //         "id": 3,
    //         "title": "Course",
    //         "description": "This is a paid react course module",
    //         "completed": true
    //     },
    // ]

    const [todos, setTodos] = useState([])
    const navigate = useNavigate();

    const isAdmin = isAdminUser();

    useEffect(() => {
        listTodos();
    }, []);

    function listTodos() {
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addTodos() {
        navigate('/add-todo')
    }

    function updateTodo(id) {
        console.log(id);

        navigate(`/update-todo/${id}`)
    }

    function removeTodo(id) {
        deleteTodo(id).then((response) => {
            listTodos()
        }).catch(error => {
            console.error(error);
        })

    }

    function completeTodo(id) {
        complete(id).then((response) => {
            listTodos()
        }).catch(error => {
            console.error(error);
        })
    }

    function inCompleteTodo(id) {
        inComplete(id).then((response) => {
            listTodos()
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <br />
            <h2 className='text-center'> List Of Todos </h2>
            <div>

                {
                    isAdmin &&
                    <button className='btn btn-primary' onClick={addTodos}> Add Todo </button>

                }


                <table className='table table-bordered table-striped'>
                    <thead className='text-center'>
                        <tr>
                            <th> Todo Title </th>
                            <th> Todo Description </th>
                            <th> Todo Completed </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td> {todo.title} </td>
                                    <td> {todo.description} </td>
                                    <td> {todo.completed ? 'Yes' : 'No'} </td>
                                    <td>
                                        {
                                            isAdmin &&
                                            <button className='btn btn-info' onClick={() => updateTodo(todo.id)} style={{ marginTop: "3px", marginBottom: "3px" }}> Update </button>
                                        }

                                        {
                                            isAdmin &&
                                            <button className='btn btn-danger' style={{ marginLeft: "10px", marginTop: "3px", marginBottom: "3px" }} onClick={() => removeTodo(todo.id)}> Delete </button>
                                        }

                                        <button className='btn btn-outline-success' style={{ marginLeft: "10px", marginTop: "3px", marginBottom: "3px" }} onClick={() => completeTodo(todo.id)}> Complete </button>
                                        <button className='btn btn-outline-warning' style={{ marginLeft: "10px", marginTop: "3px", marginBottom: "3px" }} onClick={() => inCompleteTodo(todo.id)}> In-Complete </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ListTodoComponent