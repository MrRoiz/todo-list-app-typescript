import HeaderProps from "./HeaderPropsInterface";

export default function Header({title}:HeaderProps){
    return (
        <div className='has-background-primary'>
            <h1 className='title has-text-white p-3'>
                {title}
            </h1>
        </div>
    )
}