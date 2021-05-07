import React, {useState} from 'react';
import './TodoList.css';

const TodoList = () => {
     const [inputList,setInputList]= useState("");
     const[Items,setitems] = useState([]);

     const itemEvent =(e) => {
       setInputList(e.target.value);
     };

     const listofItems = (e) => {
       e.preventDefault();
         setitems((oidItems) => {
             return [...oidItems,inputList];
         });
         setInputList("");
     };
    return(
        <>
            <div className="background" id="todo">
                <div className="center">
                    <h1>ToDo list</h1>
                    <br/>
                  <form onSubmit={listofItems}>
                    <input name="toDoText" type="text" placeholder="Add Items" onChange={itemEvent} value={inputList} className="inputTodo"/>
                    <button className="buttonTodo" type="submit"> + </button>
                  </form>
                    <ol>
                        {Items.map((itemval) => {
                        return <li> {itemval} </li>;
                    })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default TodoList