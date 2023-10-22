import React from 'react'

import './todo.css'
export default function Todo(props) {
    const{title,id,desc}=props.todo;
  return (
    <article>
        <h1>{title}</h1>
        <p>{id}</p>
        <p>{desc}</p>
        <div>
            <button ><ion-icon 
             name="trash-outline"></ion-icon></button>
            
        </div>
    </article>
  )
}
