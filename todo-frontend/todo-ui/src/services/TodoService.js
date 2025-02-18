import React from 'react'
import axios from 'axios'
import { getToken } from './AuthService';

const BASE_URL = "http://localhost:8080/api/todos"

//add a request interceptor -. google (axios doc -> interceptors)
axios.interceptors.request.use(function (config) {

    //Get token
    config.headers['Authorization'] = getToken();

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export const getAllTodos = () => {
    return axios.get(BASE_URL);
}

export const saveTodo = (todo) => axios.post(BASE_URL, todo);

export const getTodo = (id) => axios.get(BASE_URL + "/" + id);

export const updateTodo = (id, todo) => axios.put(BASE_URL + "/" + id, todo);

export const deleteTodo = (id) => axios.delete(BASE_URL + '/' + id);

export const complete = (id,) => axios.patch(BASE_URL + "/" + id + "/complete");

export const inComplete = (id) => axios.patch(BASE_URL + "/" + id + "/in-complete");

