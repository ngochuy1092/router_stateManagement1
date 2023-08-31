import { useContext } from "react"
import { AppContext } from "../App"
export const Contact = (props)=> {
        const {newName}= useContext(AppContext);

    return(
        <div>
            My name is {newName}, nice to meet you!
        </div>
    )
}