const Button=({text, fun})=>{


    
    return (<>
        
        <button onClick={fun}>{text}</button>
        </>
    )
}
export default Button;