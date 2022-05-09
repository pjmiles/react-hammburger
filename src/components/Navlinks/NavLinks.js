import React from "react";
import styled from "styled-components";
// import a from 'react-router-dom';

const as = ({ open }) => {
  const Link = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
      padding: 18px 18px;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      position: fixed;
      flex-flow: column nowrap;
      background: #4756df;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      top: 0;
      right: 0;
      height: 100vh;
      width: 180px;
      padding-top: 60px;
      padding-left: 10px;

      a {
        color: #fcfcfc;
      }
    }
  `;
  
  return (
    <Link open={open}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/skills">Skills</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </Link>
  );
};

export default as;
