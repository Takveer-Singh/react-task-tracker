import { useState } from "react";

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a task.')
            return
        }
        else if(!day)
        {
            alert('Please add a Day.')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" 
        placeholder="Add Task"
        value={text}
        onChange={(e)=>setText(e.target.value)}
         />
      </div>
      <div className="form-control">
        <label htmlFor="">Date & Time</label>
        <input type="date" placeholder="Add Date & Time"
        value={day}
        onChange={(e)=>setDay(e.target.value)}
         />
      </div>
      <div className="form-control form-control-check">
        <input type="checkbox"
        checked ={reminder}
        value={reminder}
        onChange={(e)=>setReminder(e.currentTarget.checked)}
        />
        <label htmlFor="">Set Reminder</label>
      </div>
      <input type="submit" value="Save Task"  className="btn btn-block"/>
    </form>
  );
};
