import React from "react";
import styled from "styled-components";
import pj from "../images/pjames.jpg";

const MyImage = () => {
  const TopPix = styled.img`
    width: 200px;
    height: 250px;
    border-radius: 50px;
    margin-top: 1rem;
  `;

  return (
    <TopPix src={pj} alt="myPix"/>
  );
};

export default MyImage;
