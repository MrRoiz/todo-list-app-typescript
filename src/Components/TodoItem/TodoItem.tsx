import {useDispatch} from 'react-redux'
import TodoItemPropsInterface from "./TodoItemPropsInterface";

export default function TodoItem({content,id,completed}:TodoItemPropsInterface){
    const dispatch = useDispatch()

    const handleDeleteTodo = ()=>{
        dispatch({
            type : 'TODO/DELETE_TODO',
            payload : id
        })
    }

    const handleCompleteTodo = ()=>{
        dispatch({
            type : 'TODO/TOGGLE_COMPLETE_STATE',
            payload : id
        })
    }

    return (
        <div className='card p-4 is-flex is-justify-content-space-between is-align-items-center'>
            <label className='checkbox'>
                <input type='checkbox' className='mr-4' onChange={handleCompleteTodo} checked={completed}/>
                <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{content}</span>
            </label>
            <button className='button is-danger is-small is-rounded' onClick={handleDeleteTodo}>X</button>
        </div>
    )
}