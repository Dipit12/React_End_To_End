import React, {useState} from 'react';

function todoList(){
    const [tasks, setTasks] = useState(["Take shower", "Study javascript", "Wash car"]);
    const [newTask,setNewTask] = useState("");


    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }
    return(
       <div className = "to-do-list">
            <h1>ToDo-List</h1>
            <div>
                <input type = "text" placeholder = "Enter a task..." value = {newTask} onChange = {handleInputChange}></input>
                <button className = "add-task" OnClick = {addTask}>Add task</button>
            </div>
       </div>
    );
}

export default todoList