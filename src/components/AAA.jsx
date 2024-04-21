// import { useEffect, useState } from 'react'
// import{ app } from '../firebaseconfig'
// import { doc,collection, getDocs, getFirestore, deleteDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';




// const FacultyList = () => {
//   const [facultyData, setFacultydata] = useState([]);
//   const navigate = useNavigate


//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     const db = getFirestore(app);
//     const docRef = collection(db, 'faculty');
//     const docSnap = await getDocs(docRef);
//     const data = docSnap.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
//     console.log(data);
//     setFacultydata(data);
//   }
//   // const deleteData = async (id) => {
//   //   try {
//   //     const db = getFirestore(app);
//   //     await deleteDoc(doc(db, 'faculty', id));
//   //     console.log('Document deleted with ID:', id);
//   //     // Optionally update state to reflect the change
//   //     setFacultyData(prev => prev.filter(item => item.id !== id));
//   //   } catch (error) {
//   //     console.error('Error deleting document:', error);
//   //   }
//   // };
  
// {
//   return (
//     <div>
//       <h1>Faculty List</h1>
//       {facultyData.map(faculty => {
//         return(
//           <div key={faculty.id}>
//           <p>{faculty.facultyName} - {faculty.phoneNumber}</p>
        
        
//           {/* <button onClick={() => deleteData(faculty.id)}>Delete</button>
//           <button onClick={() => navigate('/updatefaculty', {state:faculty})}>Update</button> */}
//         </div>
//       )
//       })}
//     </div>
//   )
  
// }

// export default FacultyList;
