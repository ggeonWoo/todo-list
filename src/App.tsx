
import { useState } from 'react'
import './App.css'
import Add from './contents/Add'


export default function App() {
  const [list,setList]=useState([
    {id:123, text:'공부하기', State:'active'},
    {id:456, text:'놀기', State:'active'},
    {id:789, text:'잠자기', State:'active'}
  ])
  const handleAdd=(todo)=>setList([...list,todo])

  return (
    <section>
      <ul style={{textAlign:'center',
       border:'2px solid black',
       width:'24rem',height:'24rem',
       backgroundColor:'#4B73E1',color:'white',fontSize:'1.5rem'}}>
        {list.map((item)=>(
          <li key={item.id}>{item.text}</li>)
        )} 
      </ul>
      <Add onAdd={handleAdd}/>
    </section>
  )
}



