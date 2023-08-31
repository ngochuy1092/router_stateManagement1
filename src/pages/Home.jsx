import { useContext, useState } from "react"
import {AppContext} from "../App"
export const Home = ()=> {
    let newInputName;
    const {newName} = useContext(AppContext);
    const {setNewName} = useContext(AppContext);
    return(
        <div>
            <input onChange={ (event)=>{
               newInputName= event.target.value;
            } } type="text" />

            <button onClick={ ()=> {
                setNewName(newInputName);
            }}> Change name</button>
            
            <div>
                This is the Home page. My name is {newName}
            </div>
        </div>
    )
}