
function Picture(){
    const imageurl = "./assets/image.jpg";
    const handleClick = () => {
        console.log("Hi")
    }
    return(
        <img onClick = {handleClick} src = {imageurl}></img>
    );
}

export default Picture;