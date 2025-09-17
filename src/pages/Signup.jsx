import { useState } from "react";
import { signup } from "../services/UserService";
const Signup = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name:name,
            email:email,
            password:password            
        }

        try {
             const res = await signup(payload);
             if(res){
                alert('Signup success');
             }
        } catch (error) {
            alert("Signup failed");
        }
       
    }

    return (
        <form onSubmit={_handleSubmit}>
            <div>
                <label>
                Name:
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
            </label>
            </div>
            <div>
                <label>
                Email:
                <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} />
            </label>
            </div>
            <div>
                <label>
                Password:
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                </label>
            </div>
            
            <button type="submit">Signup</button>
        </form>
    )
}

export default Signup;
