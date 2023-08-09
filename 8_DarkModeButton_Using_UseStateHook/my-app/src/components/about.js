import React, { useState } from 'react';

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });
  const [btntext, setBtnText] = useState('Enable dark mode');

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setmyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText('Enable light mode');
    } else {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtnText('Enable dark mode');
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        {/* ... Accordion items ... */}
      </div>
      <div className="container">
        <button onClick={toggleStyle} type="button" className="btn btn-secondary my-3">
          {btntext}
        </button>
      </div>
    </div>
  );
}
