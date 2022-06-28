import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { AddTask } from "./components/AddTask";

function App() {
  // state

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointement",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "meething at school",
      day: "Feb 6th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: "food Shopping",
      day: "Feb 5th at 2:30",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header  onAdd={()=>setShowAddTask
        (!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
