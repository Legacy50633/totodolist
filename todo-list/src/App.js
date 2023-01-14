import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Todolist from './components/todolist';
import  Addtask  from './components/addTask';
import Updatetask from './components/updateTask';

function App() {
  const[todolist,setTodolist] = useState([])
  const[tasktoUpdate,seTtasktoUpdate] = useState({})
  const [showPopup,setShowPopup] = useState(false)
  useEffect(()=>{
    axios.get('http://localhost:5000/api/tasks').then(res=>{
setTodolist(res.data)
    }).catch(err=>console.log(err))
  },[])
  const addTask = newTask =>{
    setTodolist([...todolist,newTask])
  }
  const taskComplete =task=>{
    const newList = [...todolist]
newList.forEach(item =>{
  if(item._id === task._id){
    item.isComplete = task.isComplete
  }
})
   setTodolist(newList)
  }
  const removeTask = task=>{
const newList = todolist.filter(item=> !(item._id=== task._id))
setTodolist(newList)
  }

  const updatetask = task =>{
 const newList = [...todolist]
 newList.forEach(item=>{
  if(item._id === task._id){
    item.todo = task.todo
  }
 })
setTodolist(newList)

  }
  return (
    <>
<Addtask addTask={addTask}/>
<Todolist  todolist={todolist} taskComplete={taskComplete}
 removeTask={removeTask} tasktoUpdate={task=>seTtasktoUpdate(task)}
 showPopup={()=>{
  setShowPopup(!showPopup)
 }}
 />
  {showPopup &&  <Updatetask task={tasktoUpdate} updatetask={updatetask}
  
  removePopup = {()=>setShowPopup(!setShowPopup)}
  />}
</>
  );
}

export default App;
