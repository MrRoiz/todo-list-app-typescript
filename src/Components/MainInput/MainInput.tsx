import { useState,KeyboardEvent } from "react";
import { useDispatch } from "react-redux";
import MainInputProps from "./MainInputPropsInterface";

export default function MainInput({placeholder}:MainInputProps){
    const [text,setText] = useState('')
    const dispatch = useDispatch()

    const handleKeyDown = (e:KeyboardEvent):void=>{
        if(e.key !== 'Enter') return
        if(text == '') return
        
        dispatch({
            type : 'TODO/ADD_TODO',
            payload : {
                content : text,
                completed : false
            }
        })

        setText('')
    }

    return (
        <input 
            className="input" 
            placeholder={placeholder} 
            value={text} 
            onChange={({target:{value}}) => setText(value)}
            onKeyUp={(e)=>handleKeyDown(e)}
        />
    )
}