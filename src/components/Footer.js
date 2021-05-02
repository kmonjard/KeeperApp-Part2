import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Karlo Monjardin</p>
    </footer>
  );
}

export default Footer;
