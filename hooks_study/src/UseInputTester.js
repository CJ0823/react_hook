import React, { useState } from "react";


const useInput = (initialValue, validator) => {
  const [ value, setValue ] = useState(initialValue);
  const onChange = e => {
    const { target: { value } } = e;
    let willUpdate = true;
    if(typeof validator === "function") {
      willUpdate = validator(value)
    }
    if(willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInputTester = () => {
  const maxLen = value => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return(
    <>
      <div className="greeting">
        <h1>test</h1>
        <input placeholder="Name" {...name} />
      </div>
    </>
  )
};

export default UseInputTester;
