import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function Add({onAdd}) {
  
  const [text,setText]=useState('');
  const handleChange =(e)=>setText(e.target.value);
  const handleSubmit=(e)=>{
    e.preventDefault();
     if(text.trim().length===0){
      return
    }
     onAdd({id: uuidv4() , text , State:'active' });
     setText('') 
  };
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="추가해주세요" value={text} onChange={handleChange}  />
        <button>클릭!</button>
    </form>
    
  )
}


 