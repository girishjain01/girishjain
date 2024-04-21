import MantarComponent from "../components/MantarComponent";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Arihanam() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const id = "Arihanam_Page"; // यह आईडी वही है जिसे आप फेच करना चाहते हैं
    axios.get(`http://localhost:5000/projects/${id}`)
      .then(response => {
          setUserData([response.data]); // ध्यान दें कि डाटा एक ऐरे में सेट किया जा रहा है
      })
      .catch(error => console.error("Error:", error));
  }, []);


  const url = "/img/mahaveer.jpg";
  const audio2 = "/mp3/acharya-1-1.mp3";

  return (
    <div>
      {userData.map((user, index) => (
        <MantarComponent
          key={index}
          heading={user.heading}
          description={{ __html: user.description }}
          url={url}
          arth={user.arth}
          audio1={"/mp3/acharya-1.mp3"} // उदाहरण के लिए, आपको सही path डालना होगा
          audio2={audio2}
        />
      ))}
    </div>
  );
}

export default Arihanam;
