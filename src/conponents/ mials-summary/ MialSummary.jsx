import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/pexels-alexy-almond-3756523 1.png";

export const MialSummary = () => {
  return (
    <Container>
      <Image src={summaryImage} alt="summary" />
    </Container>
  );
};

export default MialSummary;
const Container = styled.div``;
const Image = styled.img`
  width: 100%;
`;
