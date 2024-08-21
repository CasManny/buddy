import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center container py-5">
      <div className="">
        <p className="text-buddy-blue">&copy; 2024 Buddy - Your learning Companion</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="social-media">
        <p>Contact us at <span className="underline">info@buddy.com</span></p>
      </div>
    </footer>
  );
};

export default Footer;
