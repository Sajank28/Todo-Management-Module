import React, { useState, useEffect } from 'react'
import { getAllTodos } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'

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

    return (
        <div className='container'>
            <br />
            <h2 className='text-center'> List Of Todos </h2>
            <div>
                <button className='btn btn-primary' onClick={addTodos}> Add Todo </button>
                <br /> <br />
                <table className='table table-bordered table-striped'>
                    <thead className='text-center'>
                        <tr>
                            <th> Todo Title </th>
                            <th> Todo Description </th>
                            <th> Todo Completed </th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td> {todo.title} </td>
                                    <td> {todo.description} </td>
                                    <td> {todo.completed ? 'Yes' : 'No'} </td>
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