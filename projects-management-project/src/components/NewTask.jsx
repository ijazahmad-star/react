import { useState } from "react";

export default function NewTask({onAddnew}) {
  const [enteredTask, setEnterTask] = useState('');
  function handlChange(event) {
    setEnterTask(event.target.value);
  }
  function handleClick(){
    if(enteredTask.trim() === ''){
        return;
    }
    onAddnew(enteredTask);
    setEnterTask('')
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handlChange}
        value={enteredTask}
      />
      <button className="text-stone-600 hover:text-stone-900" onClick={handleClick}> Add Task</button>
    </div>
  );
}
