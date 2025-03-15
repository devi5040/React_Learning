import React,{useContext} from "react"
import TodoList from "./TodoList"
import classes from './Todos.module.css'
import { TodosContext } from "../store/todos-context"

const Todos:React.FC=(props)=>{
    const todoCtx = useContext(TodosContext)
return <ul className={classes.todos}>
    {todoCtx.items.map(item=>{
        return <TodoList key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null,item.id)}/>
    })}
</ul>
}

export default Todos
//functional components can be converted into a generic function