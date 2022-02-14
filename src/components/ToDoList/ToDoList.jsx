import React,{useContext} from 'react';
import ListItem from '../ListItem/ListItem';
import './ToDoList.css'
import NoItem from '../NoItem/NoItem';
import { ListContext } from '../ListContext/ListContext';

function ToDoList() {
    const [list, setList]= useContext(ListContext);
    console.log(list.length);
    
  return list.length===0 ?
  <div>
      <NoItem/>
  </div>
  :
  <div>
  <ListItem/>
</div>
}

export default ToDoList;