import React from "react";
import './NoItem.css'

function NoItem(props){
    return (
        <div className="main">
            <div className="Card">
                <h2 className="heading">My To-do-List</h2>
                <div className="addItem">
                    <p>Add Item</p>
                    <input/>
                    <button>Add</button>
                </div>
                <p className="alert">No item in the list!</p>
            </div>
        </div>
    )
}
export default NoItem;