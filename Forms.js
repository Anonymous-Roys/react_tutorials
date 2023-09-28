import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';



function Form() {
    return (
        <>
            <form>
                <table>
                    <tr>
                        <td>Firstname</td>
                        <td><input type="text" /></td>
                    </tr>   
                    <tr>
                        <td>Lastname</td>
                        <td><input type="text" /></td>
                    </tr>
                </table>
                <label>Enter your age:
                    <input type="text" />
                </label>

            </form>
            <hr/>
            <Form1/>
      
        </>
    )
}

function Form1() {
    const [name, setName] = useState("")

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}


export default Form;