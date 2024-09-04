import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import TodoItem1 from "./components/TodoItem1.jsx";
import TodoItem2 from "./components/TodoItem2.jsx";
import "./App.css"
function App() {
  return(
    <div class = "row">
    <center class ="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class = "item-container"> 
      <TodoItem1 />
      <TodoItem2 />
      </div>
      
    </center>
    </div>
  );
}

export default App
