import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider=(props)=>{
    const [list, setList]= useState([
        {
            item: "Bake pancakes",
            id: 1,
            time: "5:00pm"
        },
        {
            item: "Play Hockey",
            id: 2,
            time: "12:00pm"
        },
        {
            item: "Piano Practice",
            id: 3,
            time: "8:00pm"
        },
        {
            item: "Valentines",
            id: 4,
            time: "6:00pm"
        }
    ]);
    return <ListContext.Provider value={[list, setList]}>
        {props.children}
    </ListContext.Provider>
}