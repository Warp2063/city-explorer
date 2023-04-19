import './App.css';
import axios from "axios";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultLocation, setResultLocation] = useState({});

  const APIEndpt = "https://us1.locationiq.com";
  

  function handleQueryChange(event) {
    setSearchQuery(event.target.value);
  }
  
  async function requestLocation() {
    const queryStr = APIEndpt + "/v1/search.php?key=" + process.env.REACT_APP_API_KEY + 
    "&q=" + searchQuery + "&format=json";
    const response = await axios.get(queryStr);
    setResultLocation(response.data[0]);
  }

  return (
    <div className="App">
      <input onChange={handleQueryChange} />
      <button onClick={requestLocation}>Get Location!</button>
      <h1>The requested location is: {resultLocation.display_name}</h1>
    </div>
  );
}

export default App;
