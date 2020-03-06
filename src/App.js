import React, {useEffect, useState} from "react";
import "./App.css";
import NasaData from "./components/NasaData"


function App() {
  return (
    <div className="App">
<h1>Nasa Photo of the Day!</h1>
    <NasaData/>
    </div>
  );
}

export default App;