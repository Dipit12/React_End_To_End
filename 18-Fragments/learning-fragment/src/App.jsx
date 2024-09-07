import React from 'react';
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
function App(){
   let food_items = ["Milk","Veggies","Eggs","Fruits","Meat"];
  // let food_items = []
  return(
   
   <React.Fragment> 
      <h1>Healthy Foods</h1>
      <ErrorMessage ></ErrorMessage>
      <FoodItems />
      </React.Fragment>
  );
}

export default App;