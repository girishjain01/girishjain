import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Importentlink() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // यहां हम filter फंक्शन का उपयोग कर रहे हैं
        const filteredData = response.data.filter(user => user.id === 1 || user.id === 2 || user.id === 3);
        setUserData(filteredData);
      })
      .catch(error => console.error("Error:", error));
  }, []);

 <div>
      <h2>Importentlink</h2>
      {userData.map((user, index) => {
        return (
          <div key={index}>
            <h3>यूजर: {user.name}</h3>
            <p>यूजरनेम: {user.username}</p>
            <p>ईमेल: {user.email}</p>
            <p>फोन: {user.phone}</p>
            <p>वेबसाइट: {user.website}</p>
            <p>कंपनी: {user.company.name}</p>
            <p>एड्रेस: {`${user.address.street}, ${user.address.city}`}</p>
          </div>
        )
      })}
    </div>

}

export default Importentlink;
