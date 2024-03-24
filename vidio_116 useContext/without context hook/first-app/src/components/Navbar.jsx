import React from "react";
import Button from "./Button";

const Navbar = ({ count }) => {
  return (
    <>
      <div>I am navbar</div>
      <Button count={count} />
    </>
  );
};

export default Navbar;
