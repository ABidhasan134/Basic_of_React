import React from "react";
import Todos from "./todo.css";

import './todo.css'
function Home(){
    const dammyTodos=[
        {
            id:1,
            title:'todo title 1',
            desc: "todo discription is here"
        },
        {
            id:2,
            title:'todo title 2',
            desc: "todo discription is here"
        },
        {
            id:3,
            title:'todo title 3',
            desc: "todo discription is here"
        }
    ]

    return(
        <div>
            <h1 className="new">Todo App</h1>
            <Todos todos={dammyTodos}/>
        </div>
    )
}
export default Home;