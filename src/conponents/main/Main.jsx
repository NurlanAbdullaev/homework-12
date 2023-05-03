import React from "react";
import styled from "styled-components";
import { product } from "./MainItem";

function Main() {
  return (
    <Container>
      <MainContainer>
        {product.map((el) => (
          <>
            <MapDiv>
              <MiniDiv>
                <H4>{el.title}</H4>
                <Span>{el.about}</Span>
                <H2>{el.price}</H2>
              </MiniDiv>
              <MiniContentDiv>
                <MiniMinimalDiv>
                  <H3Content htmlFor="">Amount</H3Content>
                  <InputContent type="number" />
                </MiniMinimalDiv>
                <Button>+ Add</Button>
              </MiniContentDiv>
            </MapDiv>
            <SpanLine />
          </>
        ))}
      </MainContainer>
    </Container>
  );
}
const Container = styled.div`
  background-color: #585858;
  height: 799px;
  margin-top: -41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  background-color: #ffff;
  border-radius: 16px;
  margin-top: 40px;
  width: 959px;
  height: 560px;
  padding: 17px 0 0 0;
`;
const MapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 138px;
`;
const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 70px;
`;
const H4 = styled.h4`
  color: #222222;
`;
const Span = styled.span`
  color: #222222;
  width: 162px;
  height: 24px;
  display: flex;
`;
const H2 = styled.h4`
  color: #ad5502;
`;
const MiniContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MiniMinimalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  gap: 10px;
`;
const H3Content = styled.h3`
  color: #222222;
  width: 60px;
  height: 27px;
`;
const InputContent = styled.input`
  width: 40px;
  height: 30px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
`;
const Button = styled.button`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  color: #ffffff;
  border-radius: 20px;
  &:hover {
    background-color: #7e2a0a;
  }
  &:active {
    background-color: #993108;
  }
`;
const SpanLine = styled.span`
  width: 890px;
  height: 0px;
  display: flex;
  margin: 0 10px;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
`;
export default Main;
