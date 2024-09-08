import React, {useState} from 'react';

function MyComponent(){
    const [cars,setCars] = useState([]);
    const [carYears, setCarYears] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year:carYears, 
            make:carMake, 
            model:carModel}
        setCars(...cars, newCar)
    }
    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index))
    }
    function handleYearChange(event){
        setCarYears(event.car.make)
    }

    function handleMakeChange(event){
        setCarMake(event.target.model)
    }

    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h2>List of cars</h2>
            <ul>
                {cars.map((cars,index) => <li key = {index}>{cars.year} {cars.make} {cars.model}</li>)}
            </ul>

            <input type = "number" value = {carYears} onChange={handleYearChange} /> <br />
            <input type = "text" value = {carMake} onChange={handleMakeChange} placeholder  ="Enter car make"/>  <br />
            <input type = "text" value = {carModel} onChange={handleModelChange} placeholder  ="Enter car model"/>  <br />
            <button onClick = {handleAddCar}>Add car</button>
        </div>
    );
}


export default MyComponent;