import { useState } from "react";
import { MdDelete } from "react-icons/md";
export const TodoList = ({todoObject , removeTodo , updateChecked})=>{

  // console.log('is checked',todoObject.checked)

  return (
    <>
      <li>
       <span className={todoObject.checked ? "checkList" : "notCheckList"} style={{color : todoObject.checked ? "red" : "white"}}>{todoObject.content}</span>
        <input type="checkbox" onClick={(event)=>updateChecked(event,todoObject.content)} checked={todoObject.checked}/>
        <button onClick={()=>removeTodo(todoObject.content)} className="remove-icon"><MdDelete/></button>
      </li>
    </>
  )
}