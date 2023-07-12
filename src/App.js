import React from "react";
import Button from "./Components/Button.js"

const App = () =>{

    let arr = ["Apple", "white", "maroon"]
    return (
            <div className = "hello">
                <h1>Hello World</h1>
                <Button 
                    details = {["Apple", "white", "maroon"]}
                />
                <Button 
                    details = {["Banan", "red", "yellow"]}
                />
                <Button 
                    details = {["Guava", "black", "lightgreen"]}
                />
                <Button 
                    details = {["mango", "yellow", "green"]}
                />
            </div>
    )

}

export default App;