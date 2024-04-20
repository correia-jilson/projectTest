import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const MyComponent = () => {
  const handleClick = () => {
    // Navigate to product.html page
    window.location.href = './components/public/product.html';
  };

  return (
    <button onClick={handleClick}>
      View our Websites
    </button>
  );
};

export default MyComponent;
