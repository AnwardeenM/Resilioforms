import React from 'react';
import {Button} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Your Name' />            
            <label htmlFor="">Age</label>
            <input type="number" placeholder='Enter Your age' min={18} max={58} />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your email'/>
            <label htmlFor="">Date of Birth</label>
            <input type="date" placeholder='Select the DOB' />
            <label htmlFor="">Phone</label>
            <input type="number" minLength={10} maxLength={10}/>
            {isDisabled ? <Button>Submit</Button> : <div>fill all the details in the form</div>}
        </form>
    </div>
  )
}

export default Home