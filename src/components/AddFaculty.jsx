import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebaseconfig';

const AddFaculty = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    console.log('Form submitted with Name:', name, 'Phone:', phone);
    // Add your logic to handle form submission here
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, 'faculty'), {
        facultyName: name,  // Corrected the property name from facultyNamme to facultyName
        phoneNumber: phone
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Style for the submit button
  const submitStyle = {
    backgroundColor: '#4CAF50', // Green background
    color: 'white', // White text
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Add Faculty</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder='Full name' 
        />
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder='Phone number' 
        />
        <button style={submitStyle} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFaculty;
