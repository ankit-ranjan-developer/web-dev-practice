import { useState } from "react";
import cardImg from "./assets/images.jpeg";

import "./App.css";

import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold underline text-gray-500 bg-green-400 rounded-b-md ">
          Hello Card
        </h1>
      </div>
      <div className="flex justify-center">
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzyFEYqkfqQndmgOzZOOARlzz0aG-awZi9pckun0Qeg&s=10" name="Ankit Ranjan" post="frontend developer" />
        <Card img={cardImg} post="Hacker" />
        <Card name="Achint" />
        <Card name="" />
      </div>
    </>
  );
}

export default App;
