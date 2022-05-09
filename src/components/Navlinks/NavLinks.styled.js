import styled from "styled-components";

  const StyledLink = styled.ul`
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
    width: 220px;
    padding-top: 3.5rem;
    padding-left: 4rem;

    a {
      color: #fcfcfc;
    }
  }
`;

export default StyledLink;