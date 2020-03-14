import React from 'react';
import logo from './paws-logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="PAWS Logo" />;
}
export default Header;