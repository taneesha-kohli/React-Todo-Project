import { useEffect } from "react";

export const DateTime = ()=>{


  const dateObject = new Date();
  const date = dateObject.toLocaleDateString();
  const time = dateObject.toLocaleTimeString();

  return(
    <>
      <h1>{date} - {time}</h1>
    </>
  )
}