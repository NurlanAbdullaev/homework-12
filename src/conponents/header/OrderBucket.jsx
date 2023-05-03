import styled from "styled-components";
import ReactConponents from "../../assets/icons/Component 6/Vector.svg";

const OrderBucket = ({ children }) => {
  return (
    <Button>
      {" "}
      <img src={ReactConponents} />
      <OrderBascetTitle>{children}</OrderBascetTitle>
      <OrderBascetcont>7</OrderBascetcont>
    </Button>
  );
};
export default OrderBucket;
const Button = styled.button`
  width: 220px;
  height: 60px;
  background: #5a1f08;
  border-radius: 30px;
  color: #fff;
  &:hover {
    background-color: #7e2a0a;
  }
  &:active {
    background-color: #993108;
  }
`;
const OrderBascetTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0px 24px 0 13px;
`;
const OrderBascetcont = styled.span`
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
`;
