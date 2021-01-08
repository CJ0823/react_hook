import React, { useState } from "react";


const Basic = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  
  const updateEmail = e => {
    setEmail(e.target.value)
  }

  return(
    <>
      {count}
      <button onClick={() => setCount(count + 1)}> Increament </button>
      <input placeholder="Email" value={email} onChange={updateEmail}></input>
    </>
  )
}

export default Basic;
