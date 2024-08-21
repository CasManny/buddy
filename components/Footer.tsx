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
        <div className="">
          <h1>follow us on social media</h1>
          <p className="underline cursor-pointer">facebook</p>
          <p className="underline cursor-pointer">X</p>
          <p className="underline cursor-pointer">Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
