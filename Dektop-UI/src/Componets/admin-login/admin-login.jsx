import { useState } from 'react'
import './A_login.css'
import axios from 'axios'

function Admin_login() {

    const [hospital_id, sethospital_id] = useState('')
    const [password , setpassword] = useState('')
    const [dataIn, setDataIn] = useState('')


    const submitThis = async (e) => {
        e.preventDefault();

        const info = {email:hospital_id, pass:password}
        setDataIn([info])
        
        try {
            const response = await axios.post('/api/signup',info);
            console.log(response.data) 
        } catch (error) {
            console.error(error)
        }

    }
    
    return (
        <>
            <div className='form'>
            <form action='' method='POST' onSubmit={submitThis}>
            <div className="title">
                EHS Admin Login
            </div>
            <div className='inp-fields'>
                <input type="text" name="hospital_id" 
                    value={hospital_id} onChange={(e)=>sethospital_id(e.target.value)}  
                    id="hospital_id" placeholder='Hospital ID' required/>
                <input type="password" name="password" 
                    value={password} onChange={(e)=>setpassword(e.target.value)} 
                    id="password" placeholder='Password' required/>
            </div>
            <div className='login-button'>
                <button type="submit" >Login</button>
            </div>
            </form>
            </div>
        </>
    )
}

export default Admin_login
