import styled from "styled-components";

const Header = styled.nav`
display: flex;
width: 100%;
height: 80px;
border-bottom: 2px solid #fcfcfc;
padding: 0 20px;
justify-content: space-between;
background-color: #fcfcfc;
box-shadow: 0 1px 7px #383277;
position: sticky;

.nav:hover {
  color: #ff7235;
}

@media (max-width: 768px) {
  position: sticky;
}

.logo {
  padding: 15px 0;
  color: #4756df;
  font-size: 30px;
  line-height: 50px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: #4756df;
}

a:hover {
  color: #ff7235;
}

li {
  font-size: 20px;
  line-height: 40px;
  margin: 0 2px;
}

@media (max-width: 380px) {
  .logo {
    font-size: 18px;
  }
}

`;

export default Header;