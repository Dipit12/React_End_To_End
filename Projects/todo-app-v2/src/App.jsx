import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import TodoItem from "./components/TodoItem.jsx"
import "./App.css"
function App() {

  const todoItems = [
    {
      name:"Buy milk",
      date:"4/04/2024"
    },
    {
      name:"Go to college",
      date:"4/04/2024"
    }
  ]
  return(
    <div class = "row">
    <center class ="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class = "item-container"> 
      <TodoItem todoName=" Buy Milk" todoDate="4/04/2024"></TodoItem>
      <TodoItem todoName=" Go to college" todoDate="4/04/2024"></TodoItem>
      </div>
      
    </center>
    </div>
  );
}

export default App
