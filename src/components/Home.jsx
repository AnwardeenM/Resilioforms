import React, { useState } from 'react';
import {Button} from "@chakra-ui/react";

const Home = () => {
    const [userData,setUserData] = useState({})
    const [isDisabled,setDisabled] = useState(false);

    const handlechange = (e)=>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value}) 
    }
    const handleSubmit =()=>{
        setTimeout(()=>{
            alert("Registered the data successfully")
        })
    }


  return (
    <div>
        <form action="">
            <label>Name</label>
            <input type="text" name="name" minLength={4} onChange={handlechange} placeholder='Enter Your Name' />            
            <label >Age</label>
            <input type="number" name="age" min={18} max={60} onChange={handlechange} placeholder='Enter Your age' min={18} max={58} />
            <label >Email</label>
            <input type="email" name="email" onChange={handlechange} placeholder='Enter Your email'/>
            <label >Date of Birth</label>
            <input type="date"  name="dob" onChange={handlechange} placeholder='Select the DOB' />
            <label >Phone</label>
            <input type="number" name='mobile' onChange={handlechange} minLength={10} maxLength={10} placeholder="Enter your mobile number"/>
            {isDisabled ? <Button>Submit</Button> : <div>Please fill all the details in the form</div>}
        </form>
        <Button>
            { isShowing? "Show Details" : "Hide Details"}
        </Button>
    </div>
  )
}

export default Home