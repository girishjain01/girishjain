import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Ensure useLocation is imported
import {collection,addDoc,getFirestore,doc,updateDoc } from 'firebase/firestore'; // Correct imports for Firestore
import { app } from '../firebaseconfig'; // Ensure your Firebase config path is correct
// import { update } from 'firebase/database'

const UpdateFaculty = () => {
    const location = useLocation();
    const navigate = useNavigate
    console.log(location.state);
    const [name, setName] = useState(location.state.facultyName); // Ensure the state is optional chained
    const [phone, setPhone] = useState(location.state.phoneNumber); // Ensure the state is optional chained

    const submitHandler = async (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
        // console.log('Form submitted with Name:', name, 'Phone:', phone);
        const db = getFirestore(app);
        const docRef = doc(db, 'faculty',location.state.id); // Assume you pass the ID and use doc to get a reference

        try {
          // Update the document
          await updateDoc(docRef,{facultyName:name,phoneNumber:phone}) 
           
            navigate('/facultyList')
          

        } catch (err) {
          console.log(err);
        }
    };

    return (
      <div>
        <h1>Update Faculty</h1>
        <form onSubmit={submitHandler}>
            <input  value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name' />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone number' />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default UpdateFaculty;
