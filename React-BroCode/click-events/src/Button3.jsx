function Button3(){
    const handleClick = (e) => e.target.textContent = "OUCH";

    return(
        <button onClick = {(e) => handleClick(e)}>Clickkkk ne</button>
    );
}


export default Button3;