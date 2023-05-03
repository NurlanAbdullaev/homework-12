import React from "react";
import styled from "styled-components";
import OrderBucket from "./OrderBucket";

export const Header = () => {
  return (
    <>
      <ContainerDIV>
        <h1>ReactMeals</h1>
        <OrderBucket>Your Cart</OrderBucket>
      </ContainerDIV>
    </>
  );
};

export default Header;
const ContainerDIV = styled.div`
  width: 1200px;
  height: 101px;
  background-color: #8a2b06;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
