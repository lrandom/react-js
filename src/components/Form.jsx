import { useState } from "react"

function Form(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" name="name"
                onChange={(e)=>setName(e.target.value)}
                />
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email"
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>  

            <div>
                <label>Password</label>
                <input type="password" name="password"
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <submit>Submit</submit>
        </form>
    )
}


export default Form