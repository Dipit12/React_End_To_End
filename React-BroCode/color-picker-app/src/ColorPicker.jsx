import React, {useState} from 'react';
function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");

    const handleColorChange = (event) =>{
        setColor(event.target.value)
    }
    return(
        <div className ="color-picker">
            <h1>Color Picker</h1>
            <div className = "color-display" style = {{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select and color: </label>
            <input type = "color" value = {color} onChange = {handleColorChange}></input>
        </div>
    );
}

export default ColorPicker;