import React from "react";

import meals_image from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const DivStyled = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;

  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
  }
`;

const Header = (props) => {
  return (
    <React.Fragment>
      <HeaderStyled className="header">
        <h1>Food Ordering App</h1>
        <HeaderCartButton />
      </HeaderStyled>
      <DivStyled>
        <img src={meals_image} alt="meals_image" />
      </DivStyled>
    </React.Fragment>
  );
};

export default Header;
