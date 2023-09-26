import React from 'react';
import ReactDOM from 'react-dom/client';

const todoList = [
    { id: 1, text: 'Learn React', isCompleted: true },
    { id: 2, text: 'Learn Redux', isCompleted: false },
    { id: 3, text: 'Learn React Router', isCompleted: false },
    { id: 4, text: 'Learn React Native', isCompleted: false },
    { id: 5, text: 'Learn GraphQL', isCompleted: false },
]


const List = ({ todoList }) => (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Text</th>
                <th>Is Completed</th>
            </tr>
            </thead>
            <tbody>
            {todoList.map((item) => (
            <tr>
                <td>{item.id}</td>
                <td>{item.text}</td>
                <td>{item.isCompleted ? 'Yes' : 'No'}</td>
            </tr>))}
            </tbody>
        </table>
    )

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <h1>Hello, world!</h1>
        <List todoList={todoList} />
    </>
);