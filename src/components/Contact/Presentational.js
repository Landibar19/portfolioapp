import React from 'react'
import { db } from '../../firebaseConfig';
import { useState } from 'react';
import { addDoc,collection } from 'firebase/firestore';
import './Styles.scss'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    
    const docRef = collection(db, "contact")
    
    const handleSubmit =(e)=> {

       addDoc(docRef,{
            name:name,
            email:email,
            message:message
        })
    
        setName("")
        setEmail("")
        setMessage("")
         
    }
  return (

    <form>
        <h1> Contact us</h1>
        <input type="text" 
        placeholder="Enter your name"
        onChange={(e)=>{setName(e.target.value)}}
        />
        <input 
        type="email"
        placeholder="Enter your email"
        onChange={(e)=>{setEmail(e.target.value)}}
        />
       
        <textarea
        cols="50"
        rows="10" 
        placeholder="Type your message here..."
        onChange={(e)=>{setMessage(e.target.value)}}/>
        <button type="submit" onClick={handleSubmit}>Send</button>
    </form>
   
   
  )
}

export default Contact;
