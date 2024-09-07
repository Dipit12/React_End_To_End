function Button(){

    const handleClick = (name) => {
        alert(`${name} you clicked me`)
    }
    return(
        <button onClick = {() => handleClick("Dipit")}> Click Me</button>
    );
}

export default Button;