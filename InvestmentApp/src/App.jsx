import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      const latestData = { ...prevUserInput, [inputIdentifier]: +newValue };
      return latestData;
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleInputChange} />
      {!isValidInput && (
        <p className="center">Please enter valid duration(Greater than 0)</p>
      )}
      {isValidInput && <Results input={userInput} />}
    </>
  );
}

export default App;
