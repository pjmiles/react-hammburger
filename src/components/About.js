import React from "react";
import styled from "styled-components";
import MyImage from "./MyImage";



const About = () => {
  const Abt = styled.p`
  background-color: #fcfcfc;
  text-align: left;
  margin: 2rem 7rem 0 7rem;
  box-shadow: 0 1px 6px #383277;
  border-radius: 5px;
  font-size: 19px;
  line-height: 1.5;
  padding: 0 5px 9px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  .about-text{
    margin-top: 1rem;
    margin-left: 1rem;
    text-align: left;
  }
`;
 
  return (
    <Abt className="about">
      <div className="profile-image">
        <MyImage />
      </div>
      <div className="about-text">
        <h2>About section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.<br />
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
    </Abt>
  );
};

export default About;
