import { useState, useEffect } from "react";
import axios from "axios";

function transliterate(word) {
  // यह एक सरल और बहुत ही बेसिक ट्रांसलिटरेशन फंक्शन है
  // जो केवल कुछ उदाहरणों के लिए काम करेगा
  const transliterationMap = {
    'a': 'अ',
    'b': 'रि',
    'c': 'हं',
    'd': 'त'

    // अन्य अक्षरों के मैपिंग्स जोड़ें...
  };

  return word.split('').map(char => transliterationMap[char] || char).join('');
}
function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
    const filteredData = data.filter(item =>
    item.name?.toLowerCase().includes(transliterate(searchTerm)) ||
      item.heading?.toLowerCase().includes(transliterate(searchTerm)) ||
      item.arth?.toLowerCase().includes(transliterate(searchTerm)) ||
      item.sutar?.toLowerCase().includes(transliterate(searchTerm))
  )};

  const filteredData = data.filter(item => {
    // आइटम के प्रत्येक वैल्यू को एक स्ट्रिंग में बदलें और उसमें खोजें
    return Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm)
    );
});

  return (
    <div className="p-5 bg-light">
      <div className="bg-white shadow border">
        <input
          type="text"
          className="form-control"
          onChange={handleSearch}
          placeholder="Search..."
        />
        <p>Total Results: {filteredData.length}</p>
        <table className="table">
          <thead>
            <tr>
              <th>SN</th>
              <th>ID</th>
              <th>Heading</th>
              <th>Arth</th>
              <th>Sutar</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* सीरियल नंबर */}
                <td>{item._id}</td> {/* डेटाबेस ID */}
                <td>{item.heading}</td>
                <td dangerouslySetInnerHTML={{ __html: item.sutar }}></td>
                <td dangerouslySetInnerHTML={{ __html: item.arth }}></td>
                <td dangerouslySetInnerHTML={{ __html: item.description }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
