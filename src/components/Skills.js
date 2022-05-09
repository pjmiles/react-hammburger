import styled from "styled-components";
import img1 from "../images/html.png";
import img2 from "../images/css.png";
import img3 from "../images/bootstrap.jpg";
import img4 from "../images/js.png";
import img5 from "../images/react.png";
import img6 from "../images/git.png";
import img7 from "../images/python.png";
import img8 from "../images/sql.png";

const Skills = () => {
  const Swrap = styled.div`
    max-width: 68.75rem;
    margin: auto;
    text-align: center;
    margin-top: 3rem;
  `;

  const Sheader = styled.div`
    margin-bottom: 1rem;
    padding: 0.6rem;
  `;
  
  return (
    <Swrap>
      <Sheader><h2>My top skills</h2></Sheader>
      <div className="first-set">
        <img src={img1} alt="" className="icon" />
        <img src={img2} alt="" className="icon" />
        <img src={img3} alt="" className="icon" />
        <img src={img4} alt="" className="icon" />
      </div>
      <div className="second-set">
        <img src={img5} alt="" className="icon" />
        <img src={img6} alt="" className="icon" />
        <img src={img7} alt="" className="icon" />
        <img src={img8} alt="" className="icon" />
      </div>
    </Swrap>
  );
};

export default Skills;
