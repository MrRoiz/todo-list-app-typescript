import MainState from '../State/MainState'
import { AnyAction } from 'redux'
import MainStateInterface from '../State/MainStateInterface'

export default function MainReducer(state = MainState, {type,payload}:AnyAction):MainStateInterface {
    switch(type){
        case 'TODO/ADD_TODO':
            return {
                ...state,
                todos : [
                    {
                        id : state.todos.reduce((carry,{id})=>{
                            if(id >= carry) carry = id+1
                            return carry
                        },1),
                        deleted : false,
                        ...payload
                    },
                    ...state.todos
                ]
            }
        case 'TODO/DELETE_TODO':
            return {
                ...state,
                todos : state.todos.map(todo=>{
                    if(todo.id == payload) todo.deleted = true
                    return todo
                }),
            }
        case 'TODO/TOGGLE_COMPLETE_STATE':
            return {
                ...state,
                todos : state.todos.map(todo=>{
                    if(todo.id == payload) todo.completed = !todo.completed
                    return todo
                }),
            }
        default:
            return state
    }
}