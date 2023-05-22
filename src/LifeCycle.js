import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  const [counter1, setcounter1] = useState(0);
  const [counter2, setcounter2] = useState(0);
  useEffect(() => {
    console.log("useEffect no dependency");
  });
  useEffect(() => {
    console.log("useEffect []");
  }, []);
  useEffect(() => {
    console.log("useEffect counter1");
  }, [counter1]);
  useEffect(() => {
    console.log("useEffect counter2");
  }, [counter2]);
  useEffect(() => {
    console.log("useEffect [counter1 counter2]");
  }, [counter1, counter2]);

  return (
    <div>
      <h1>CLICK 1: {counter1}</h1>
      <h1>CLICK 2: {counter2}</h1>
      <button onClick={() => setcounter1(counter1 + 1)}>GO1</button>
      <button onClick={() => setcounter2(counter2 + 1)}>GO2</button>
    </div>
  );
};

export default LifeCycle;
/*Los efectos interactuan en el ciclo de vida 
de React, cuando se renderizan un componente*/
