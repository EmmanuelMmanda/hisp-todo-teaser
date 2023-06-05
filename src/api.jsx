import axios from "axios";
import Base64 from "base-64";
// import {toast} from 'react-toastify'

// urls
const API_BASE_URL =
  "https://dev.hisptz.com/dhis2/api/dataStore/emmanuel_mmanda";
const GET_ALL_TODOS_URL = `${API_BASE_URL}?fields=.`;
const ADD_TODO_URL = (todo) => `${API_BASE_URL}/${todo.id}`;
const UPDATE_TODO_URL = (todo) => `${API_BASE_URL}/${todo.id}`;
const DELETE_TODO_URL = (todo_id) => `${API_BASE_URL}/${todo_id}`;

// method to encode credentials
const ENCODE_CREDENTIALS = (username, pass) =>
  Base64.encode(`${username}:${pass}`);

// headers auth
const AUTH_HEADERS = {
  "Content-Type": "application/json",
  "Authorization": `Basic ${ENCODE_CREDENTIALS("admin", "district")}`,
  "Accept": "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Connection": "keep-alive",
  "Host": "dev.hisptz.com"
};


// Fetching all todos
export const fetchAllTodos = async () => {
  try {
    console.log(AUTH_HEADERS);
    const response = await axios.get(GET_ALL_TODOS_URL, {
      headers: AUTH_HEADERS,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching todos-> ", error);
    throw error;
  }
};
// adding a new todo passing todo-is in the url
export const addNewTodo = async (todo) => {
  try {
    const response = await axios.post(
      ADD_TODO_URL,
      todo,
      { headers: AUTH_HEADERS },
      todo
    );
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

// Update a todo given its id
export const updateTodo = async (id, todo) => {
  try {
    const response = await axios.put(
      UPDATE_TODO_URL,
      { headers: AUTH_HEADERS },
      todo
    );
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    await axios.delete(DELETE_TODO_URL(id), { headers: AUTH_HEADERS });
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
