import React from "react";
import Image from "next/image";
import "./Header.css";
const Header = () => {
  return (
    <div className="default-header">
      <Image src="/icons/logo.svg" alt="AGO Logo" width={150} height={80} />
    </div>
  );
};

export default Header;
