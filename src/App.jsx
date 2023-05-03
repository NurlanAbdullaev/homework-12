import { Header } from "./conponents/header/Header";
import { MialSummary } from "./conponents/ mials-summary/ MialSummary";
import Button from "./conponents/UI/Button";
import MealSumariCard from "./conponents/ mials-summary/MealSumariCard";
import Main from "./conponents/main/Main";

function App() {
  return (
    <>
      <Header />
      <MialSummary />
      <MealSumariCard />
      <Button />
      <Main />
    </>
  );
}

export default App;
