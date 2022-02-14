import './ListItem.css'
import styles from './ListItem.module.css'
import React, { useContext, useState } from "react";
import { ListContext } from '../ListContext/ListContext';


function ListItem() {
    const [list, setList]= useContext(ListContext)
    const [todoText, setTodotext] = useState("");
    const [todoTime, setTodoTime] = useState("");

    function randomId() {
        const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
        return uint32.toString(16);
      }

    const handleAddToDo=()=>{
        const data = {
            item: todoText,
            id: randomId(),
            time: todoTime
        }
        addData(data);
        setTodotext("");
        setTodoTime("");
    }
    const addData=(data)=>{
            setList([...list, data])
    }

    return (
        <div className="main">
            <div className={styles.Card}>
                <h2 className="heading">My To-do-List</h2>
                <div className={styles.addItem}>
                    <div className={styles.inputlev1}>
                        <input value={todoText} placeholder="Add Activity" onChange={(e) => setTodotext(e.target.value)} 
                        className="input-a"></input>
                        {todoText.length > 0 && 
                            <input value={todoTime} className="input-b" placeholder="Add Time i.e 12:00hrs" 
                            onChange={(event) => setTodoTime(event.target.value)}></input>
                        }
                    </div>
                    
                    {todoText.length > 0 && 
                         <div className={styles.fromTodo}>
                             < button onClick={handleAddToDo} className="input-d" >Add</button>
                         </div>
                    }
                </div>

                    {list.map((listItem) => {
                        return (
                            <div className={styles.items} key={listItem.id}>
                                <input type="checkbox"></input>
                                <p className={styles.activity}><span style={{fontWeight: 'bold'}}>{listItem.item}</span></p>
                                <p className={styles.time}> {listItem.time}</p>
                                
                                    <button>Edit</button>
                                
                                <button>Delete</button>
                            </div>
                        )
                    })}
            </div>
            
        </div>
        
    )

}
export default ListItem;