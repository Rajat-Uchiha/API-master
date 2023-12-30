import React from "react";
import myLogo from "../logo/myLogo.png";
const Footer = () => {
  return (
    <footer className="mx-40 pt-10 pb-5">
      <div className="font-Custom flex justify-start items-end space-x-4">
        <img className="w-24" src={myLogo} alt="workwithrajat" />
        <h3 className="text-xl font-semibold">
          &#169; myapimaster.netlify.app
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
