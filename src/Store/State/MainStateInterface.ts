export interface Todo{
    id:number,
    content:string,
    completed:boolean,
    deleted:boolean
}

export default interface MainStateInterface{
    todos:Todo[]
}