import React from "react";
import Hammburger from "../Hammburger/Hammbuger";
import About from "../About";
import Header from "./Navbars.styled";

export default function NavBars() {

  return (
    <>
      <Header>
        <div className="logo">PONMILE ADEBISI</div>
        <Hammburger />
      </Header>
      <About />
    </>
  );
}
