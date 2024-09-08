import React, {useState} from 'react'

function MyComponent(){
    const [foods,setFoods] = useState(["Apple","Orange","Banana"])

    const HandleaddFood = () =>{
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods([...foods, newFood]);
    }

    const HandleremoveFood = (index) =>{
        
        // setFoods(foods.filter((_, i)) => i !== index));
    }

    return(
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => <li key = {index}>{food}</li>)}
            </ul>
            <input type = "text" id = "foodInput" placeholder = "Enter food name"></input>
            <button onClick = {HandleaddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent;