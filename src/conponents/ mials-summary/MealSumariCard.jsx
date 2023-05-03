import styled from "styled-components";

const MealSumariCard = () => {
  return (
    <Container>
      <h3>Delicious Food, Delivered To You</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </p>
    </Container>
  );
};
export default MealSumariCard;
const Container = styled.div`
  background: #383838;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  width: 854px;
  height: 270px;
  color: #ffffff;
  position: absolute;
  width: 854px;
  height: 270px;
  left: 293px;
  top: 358px;

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
  }
`;
