import React from 'react'
import axios from 'axios'

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth"

export const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj);

export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + "/login", { usernameOrEmail, password });

//local storage doesnt have expiry
export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

//session storage gets expired when we close the session
export const saveLoggedInUser = (username, role) => {
    sessionStorage.setItem("authentucatedUser", username);
    sessionStorage.setItem("role", role);
};

export const isAdminUser = () => {
    let role = sessionStorage.getItem("role");

    if (role != null && role === 'ROLE_ADMIN') {
        return true;
    } else {
        return false;
    }
}

export const isUserLoggedIn = () => {
    //retriving username from session storage
    const username = sessionStorage.getItem("authentucatedUser");

    if (username == null) {
        return false;
    } else {
        return true;
    }
}

export const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authentucatedUser");
    return username;
}

export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}