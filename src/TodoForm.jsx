import { useState } from "react";

export const TodoForm = ({handleOnSubmit}) => {

 const [inputValue , setInputValue] = useState('');

 
//  console.log("input value",inputValue);

 const handleInputValue = (value)=>{
   setInputValue(value);
  }
  
  const handleSubmit = (event)=>{
     event.preventDefault();
     handleOnSubmit(inputValue,setInputValue);
  }

  return (
    <>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <input type="text" onChange={(event)=>handleInputValue(event.target.value)}  value={inputValue}/>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};
