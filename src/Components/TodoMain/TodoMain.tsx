import { useDispatch, useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import MainStateInterface from "../../Store/State/MainStateInterface";
import NoTodosToShow from "../NoTodosToShow/NoTodosToShow";
import { useEffect } from "react";
import axios from "axios";
import TodoServiceInterface from "./TodoServiceInterface";

export default function TodoMain(){
    const todoList = useSelector((state:MainStateInterface)=>state.todos)
    const dispatch = useDispatch()

    useEffect(()=>{
        const getTodoList = async ()=>{
            let {data} = await axios.get<TodoServiceInterface[]>('https://jsonplaceholder.typicode.com/todos')

            // let response = await fetch('https://jsonplaceholder.typicode.com/todos')
            // let data:TodoServiceInterface[] = await response.json()
            
            data.forEach(todo=>{
                dispatch({
                    type : 'TODO/ADD_TODO',
                    payload : {
                        content : todo.title,
                        completed : todo.completed
                    }
                })
            })
        }

        getTodoList()
    },[])

    const renderList = ()=>{
        if(todoList.reduce((carry,todo)=>{
            if(!carry) return carry
            return todo.deleted
        },true)) return <NoTodosToShow/>
        else{
            return todoList.filter(todoItem=>!todoItem.deleted).map(todoItem=>(
                <TodoItem key={todoItem.id} id={todoItem.id} completed={todoItem.completed} content={todoItem.content}/>
            ))
        }
    }

    return (
        <div className='mt-5'>
            {renderList()}
        </div>
    )
}