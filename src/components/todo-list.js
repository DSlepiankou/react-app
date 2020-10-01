import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {
    return(
      <ul>
        <li><ToDoListItem label = "Drink coffee"/></li>
        <li><ToDoListItem 
        label = "Build React App"
        important/></li>
      </ul>
    );  
};

export default ToDoList;