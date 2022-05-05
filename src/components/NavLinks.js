import React from "react";
import styled from 'styled-components';

const NavLinks = ({ open }) =>{

  const Link = styled.ul`

      list-style: none;
      display: flex;
      flex-flow: row nowrap;
  
    li {
      padding: 18px 18px;
      font-size: 20px;
    }

    @media (max-width: 768px){
      position: fixed;
      flex-flow: column nowrap;
      background: #4756df;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      padding-top: 3.5rem;
      padding-left: 6rem;

      a {
        color: #fcfcfc;
      }

    }
  
  `;
    return (
      <Link  open={open}>
          <li><a href='/'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
      </Link>
      )
}

export default NavLinks;
