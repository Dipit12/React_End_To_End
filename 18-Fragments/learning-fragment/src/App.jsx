import React from 'react';
function App(){
   let food_items = ["Milk","Veggies","Eggs","Fruits","Meat"];
  // let food_items = []
  return(
   
   <React.Fragment> 
      <h1>Healthy Foods</h1>
      {food_items.length == 0 ? <h3>I am still hungry</h3>:null}
      <ul class="list-group">
        {food_items.map(item => <li class="list-group-item">{item}</li>)}
        
      </ul>
      </React.Fragment>
  );
}

export default App;