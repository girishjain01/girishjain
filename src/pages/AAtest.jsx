// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FiX } from 'react-icons/fi';
// import Mainsearchcomponent from "./components/Searchcomponent/Mainsearchcomponent";

// function transliterate(word) {
//   const transliterationMap = {
//     'a': 'अ', 'b': 'रि', 'c': 'हं', 'd': 'त'
//     // Add more mappings as needed...
//   };
//   return word.split('').map(char => transliterationMap[char] || char).join('');
// }

// function Search1() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/projects/")
//          .then(res => setData(res.data))
//          .catch(err => console.error(err));
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//   };

//   const filteredData = data.filter(item => {
//     const term = transliterate(searchTerm);
//     return (
//       item.name?.toLowerCase().includes(term) ||
//       item.heading?.toLowerCase().includes(term) ||
//       item.arth?.toLowerCase().includes(term) ||
//       item.sutar?.toLowerCase().includes(term) ||
//       item.description?.toLowerCase().includes(term)  // Now including description in the search
//     );
//   });

//   return (
//     <div className="p-10 bg-light">
//       <div className="bg-white shadow border-500">
//         <div className="flex items-center">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Search..."
//             className="form-control h-14 flex-grow"
//           />
//           {searchTerm && (
//             <button onClick={clearSearch} className="ml-2 text-lg">
//               <FiX />
//             </button>
//           )}
//         </div>
//         <p className="pl-20">Total Results: {filteredData.length}</p>
//         {filteredData.map((user, index) => (
//           <Mainsearchcomponent
//             key={index}
//             sno={index + 1}
//             heading={user.heading}
//             sutar={user.sutar}
//             arth={user.arth}
//             description={{ __html: user.description }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Search1;
