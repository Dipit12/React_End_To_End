import React, {useState} from 'react';
function MyComponent2(){
    const [foods,setFoods] = useState(["Milk","Veggies","Eggs","Fruits","Meat"])
    function handleAddFood(){

    }

    function handleRemoveFood(){

    }

    return(
        <div>
            <h2>List of foods</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}

export default MyComponent2;