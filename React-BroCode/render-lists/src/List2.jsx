function List2(props){
    const fruits = props.items;
    const listItems = fruits.map(fruit => <li>{fruit.name} and its calories are {fruit.calories}</li>)
    return(
        <ul>{listItems}</ul>
    );

}

export default List2;