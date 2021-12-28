import React from 'react';

import CardTodo from "./card";

import '../style/list.css';


export default function List({todos, setTodos}) {

    console.log(todos);
    if (todos.length > 0) 
        console.log(todos[0].title);

    

  /*
  return (
      <div>
          <ul>
          {todos.map((value, index) => {
            return <CardTodo key={index} todo={value} todos={todos} setTodos={setTodos}/>
           })}
        </ul>
          
      </div>
  )
  */

  return (
    <div class = 'Card'>  
        {todos.map((value, index) => {
          return <CardTodo key={index} todo={value} todos={todos} setTodos={setTodos}/>
         })}
    </div>
)
}