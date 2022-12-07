import React, { useState } from "react";

function Toggle() {
  // const [toggle, setToggle] = useState(false);

  // return (
  //   <button
  //     onClick={(e) => {
  //       setToggle(() => (toggle === "OFF" ? "ON" : "OFF"));
  //     }}
  //   >
  //     {toggle}
  //   </button>
  // );
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
