import React from "react";

function MyComponent() {
  const handleClick = () => {
    alert("Click here");
  };

  return <button onClick={handleClick}>Click here</button>;
}

function Boody() {
  return <img className="imgg" src="/Ajloun_Castle.jpg" alt="" />;
}


function SubComponent(props) {
  const handleClick = () => {
    alert("تم النقر!");
  };

  return <button onClick={handleClick}>اضغط هنا</button>;
}


function MyComponents() {
  const handleClick = (info) => {
    alert(`تم النقر! المعلومة: ${info}`);
  };

  return <button onClick={() => handleClick("معلومة مهمة")}>اضغط هنا</button>;
}

function Apps() {
  return (
    <div>
      <MyComponent />
      <Boody />
      <SubComponent />
      <MyComponents />
    </div>
  );
}

export default Apps;
