import React, { useState, useEffect, useRef } from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

function App() {
  const [title] = useState('Hello React');
  // const [isShowing, setIsShowing] = useState(false);
  // const mountRef = useRef(false);
  
  // // Component Did Mounted only
  // useEffect(() => {
  //   console.log('App Mounted');
  // }, []);

  // // Component will update
  // useEffect(() => {
  //   if (mountRef.current) {
  //     console.log('App Updated');
  //   } else {
  //     mountRef.current = true;
  //   }
  // }, [isShowing])

  // function handleClick() {
  //   setIsShowing(!isShowing);
  // }

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <Images />
        </div>
      </div>
    </section>
  );
}

export default App;
