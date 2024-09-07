import Item from "./Item";

const FoodItems = () =>{
    let food_items = ["Milk","Veggies","Eggs","Fruits","Meat"];
    return(
        <ul class="list-group">
        {food_items.map(item =><Item foodItem = {item}></Item> )}
        
        </ul>
    );
      
}

export default FoodItems;
