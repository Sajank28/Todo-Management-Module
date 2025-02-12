import React from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:8080/api/todos"

export const getAllTodos = () => {
    return axios.get(BASE_URL);
}
