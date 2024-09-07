import List from "./List";
import List2 from "./List2";
function App(){

  const fruits = [{name:"apple", calories:95},
                    {name:"orange", calories:45},
                    {name:"banana", calories:105}, ]

  return(
    <>
      <List />
      <List2 items = {fruits} />
    </>
  );
}

export default App;