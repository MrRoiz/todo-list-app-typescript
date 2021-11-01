import MainInput from "../MainInput/MainInput";
import TodoMain from "../TodoMain/TodoMain";

export default function Main(){
    return (
        <div className='is-flex mt-5 is-justify-content-center columns'>
            <div className='column is-half'>
                <MainInput placeholder='Add a todo'/>
                <TodoMain/>
            </div>
        </div>
    )
}