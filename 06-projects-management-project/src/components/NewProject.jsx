
import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject( {onAdd, onCancel}) {
    const modal = useRef()
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() ===''){
            // error msg - modal
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
  return (
<>
    <Modal ref={modal} ButtonCaption="Close"> 
        <h2 className="mb-2 uppercase font-bold md:text-xl text-stone-400">Invalid Input </h2>
        <p className="text-slate-400 mb-2">Please make sure you provide valid value to each field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          {" "}
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}> Cancel </button>{" "}
        </li>
        <li>
          {" "}
          <button className="bg-stone-800 text-stone-50 hover:text-stone-950 px-6 py-2 rounded-md" onClick={handleSave}> Save </button>{" "}
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title"/>
        <Input ref={descriptionRef} label="Description" textarea/>
        <Input type = "date" ref={dueDateRef} label="Due Date"/>
      </div>
    </div>
</>
  );
}
