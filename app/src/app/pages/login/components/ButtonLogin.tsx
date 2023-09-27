
interface IButtonloginProps{
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    children?:React.ReactNode
    className?:string
}
export const ButtonLogin: React.FC<IButtonloginProps> = ({type , onClick, children }) => {

    return(
        <button 
        type= {type}
        onClick={onClick}
        >      
            {children}
        </button>
    )
        

    
}