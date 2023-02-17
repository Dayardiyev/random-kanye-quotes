import { useEffect, useState } from "react";

const API = "https://api.kanye.rest/";

function App() {
  const [quote, setQuote] = useState("");
  const handleClick = async () => {
    try {
      const response = await fetch(API, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.quote);
      setQuote(result.quote);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="App">
        <h1>{quote}</h1>
      </div>

      <button onClick={handleClick}>Get Quote</button>
    </>
  );
}

export default App;
