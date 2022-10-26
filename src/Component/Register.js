import React ,{useState}from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [user,setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmpassword: ""
    })
    const navigate = useNavigate()

const handleChange = (e)=>{
    const { name , value} = e.target;
    setUser((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault();
        console.log(user)
    const {firstName,lastName,email,password,confirmpassword} = user
    if(firstName && lastName && email && password){
        if(password === confirmpassword){
            await axios.post("http://hackathonbeno.herokuapp.com/register",user)
            .then((res) => {
                alert(res.data.message)
                navigate("/login")

            })

        }
        else{
            alert("Check Your Password")
        }
    }
    else{
        alert("Fill All The Fields")
    }

        

}
  return (
    <div className='container'>
        <form>
            <label htmlFor='firstname'>First Name</label>
            <input type="text" id="firstname" onChange={handleChange} name="firstName" value={user.firstName}/>

            <label htmlFor='lastname'>Last Name</label>
            <input type="text" id="lastname" onChange={handleChange} name="lastName" value={user.lastName}/>

            <label htmlFor='email'>Email Id</label>
            <input type="email" id="email"  name='email' value={user.email} onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={user.password} onChange={handleChange}/>
            
            <label htmlFor="re-password">Confirm-Password</label>
            <input type="password" id="confirm-password" name='confirmpassword' value={user.repassword} onChange={handleChange}/>

            <button className="btn" onClick={handleSubmit}>Register</button>

            <button className="btn" onClick={()=>navigate("/login")}>login</button>
        </form>
    </div>
  )
}

export default Register