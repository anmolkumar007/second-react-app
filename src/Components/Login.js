import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

    const[uname,setUname] = useState('');
    const[upwd, setUpwd] = useState('');

    const[formErrors,setFormErrors] = useState({});

    const nav = useNavigate();

    const handleLogin=()=>{

        let errors = {};

        if(!uname) errors['uNameErr'] = 'Username can not be empty';
        if(!upwd) errors['uPwdErr'] = 'Please provide password for login'

        setFormErrors(errors);

        if(Object.keys(errors).length===0)
        {

        const payload={
            username:uname,
            password:upwd
        }
        axios.post("http://localhost:8080/auth/login",payload)
        .then(resp=>{
            const loggedIn = resp.data;
            const myObj = {
                userId: loggedIn.userId,
                firstName: loggedIn.firstName,
                lastName: loggedIn.lastName,
                role: loggedIn.role
            }
            localStorage.setItem("myuser",JSON.stringify(myObj));
            
            const role = loggedIn.role;
            if(role==='customer') {nav("/customer/dashboard");}
            if(role==='admin') nav("/admin/dashboard");
           
        })
        .catch(error=> alert(error.response.data))
    }
    }

    return(
        <div>
            <div>
                <label>Username</label>
                <input type='text' name='uname' value={uname} placeholder='Enter username' 
                onChange={event=>setUname(event.target.value)}/>
                <div>
                    {
                        formErrors.uNameErr &&
                        <div style={{color:'red'}}>
                            {formErrors.uNameErr} 
                        </div>
                    }
                </div>
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='upwd' value={upwd} placeholder='Enter password'
                onChange={event=>setUpwd(event.target.value)}/>
                <div>
                    {
                        formErrors.uPwdErr &&
                        <div style={{color:'red'}}>
                            {formErrors.uPwdErr} 
                        </div>
                    }
                </div>
            </div>
            <div>
                <button className="btn btn-success" onClick={handleLogin}>Login</button>
            </div>

        </div>
    )
}

export default Login;