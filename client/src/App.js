import React, { useState } from "react";
import './App.css';


function App() {

    const [movieN, setMovie] = useState('');
    const [revie, setReview] = useState('');



  return (
    <div className="App">
        <h1>CRUD APP</h1>
        <div className="form">
            <label>Movie Name</label>
            <input type = "text" name="movieName" onChange={(e)=>{
             setMovie(e.target.value);
            }}/>
            <label>Review</label>
            <input type = "text" name="review"/>

            <button>Submit</button>
        </div>
    </div>
  );
}

export default App;
