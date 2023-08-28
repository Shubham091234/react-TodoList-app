import React, { useState } from "react";

const Todo = ()=>{

const [name, valnew] = useState("");
const [val1, valnew1] = useState( [] );
const input =  (data)=>{
valnew(data.target.value); };

const adda = ()=>{
valnew1((olditem)=>{
return [ ...olditem, name];});
valnew("")};

const deletedata = (index) => {
  valnew1((oldItems) => oldItems.filter((_, find) => {
    return (find !== index )} ));};

return (
    <>  
<div className="card">
  <div className="main">
          <h1>TodoList</h1>
             <input type="text" placeholder="Type Here" onChange={input} value={name} />
             <button onClick={adda} className="additem" > + </button>
             <ol>
             <div className="item-body">
               { val1.map((value, index) => {

                     return (
                     <>
                       <div className="items">
                       <li key={index} className="list"> <button className="delete" onClick={() => deletedata(index)}><i className="fa fa-times"></i></button> {value}</li>

                     </div>
                     </>
                         )})}
                  </div>
              </ol>
          </div>
    </div>
    </> );};

export default Todo;