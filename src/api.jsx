import axios from "axios";
import Base64 from "base-64";
import { toast } from "react-toastify";
// import {toast} from 'react-toastify'

// urls
const API_BASE_URL =
  "https://dev.hisptz.com/dhis2/api/dataStore/emmanuel_mmanda";
const GET_ALL_TODOS_URL = `${API_BASE_URL}?fields=.`;
const ADD_TODO_URL = (todo) => `${API_BASE_URL}/${todo.id}`;
const UPDATE_TODO_URL = (id) => `${API_BASE_URL}/${id}`;
const DELETE_TODO_URL = (todo_key) => `${API_BASE_URL}/${todo_key}`;

// method to encode credentials
const ENCODE_CREDENTIALS = (username, pass) =>
  Base64.encode(`${username}:${pass}`);

// headers auth
const AUTH_HEADERS = {
  "Content-Type": "application/json",
  Authorization: `Basic ${ENCODE_CREDENTIALS("admin", "district")}`,
  Accept: "*/*",
};

// Fetching all todos
export const fetchAllTodos = async () => {
  try {
    const response = await axios.get(GET_ALL_TODOS_URL, {
      headers: AUTH_HEADERS,
    });

    return response.data;
  } catch (error) {
    toast.dismiss();
    console.error("Error fetching todos", error);
    toast.error("Error Fetching Todos", { limit: 1 });
    throw error;
  }
};
// adding a new todo passing todo-id in the url
export const addNewTodo = async (todo) => {
  console.log("to be added ", todo);
  try {
    const response = await axios.post(ADD_TODO_URL(todo), todo, {
      headers: AUTH_HEADERS,
    });
  console.log(" added ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

// Update a todo
export const updateATodo = async (id, todo) => {
  try {
    console.log(UPDATE_TODO_URL(id));
    const response = await axios.put(UPDATE_TODO_URL(id), todo, {
      headers: AUTH_HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteATodo = async (id) => {
  try {
    const res = await axios.delete(DELETE_TODO_URL(id), {
      headers: AUTH_HEADERS,
    });
    return res;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
