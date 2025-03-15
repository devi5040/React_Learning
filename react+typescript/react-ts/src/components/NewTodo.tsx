import { useRef,useContext } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo:React.FC= ()=>{
    const todoCtx = useContext(TodosContext)
    //above ()=> refers to defining the shape of function we can define the type of arguements and return type
    const todoTextRef = useRef<HTMLInputElement>(null);

    //React.FormEvent => special event object which will be produced when we submit a form
    const submitHandler = (event:React.FormEvent)=>{
        event.preventDefault();
        // const enteredText = todoTextRef.current?.value;
        const enteredText = todoTextRef.current!.value; //=> if we are sure the vaue won't be null then we need to put ! instead of ?
        if(enteredText.trim().length===0){
            //throw an error
            return
        }

        todoCtx.addTodo(enteredText)
    }
return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextRef}/>
        <button>Add Todo</button>
    </form>
)
}

export default NewTodo;