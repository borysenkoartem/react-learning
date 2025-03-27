import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 6
    });

    const isInputValid = userInput.duration >= 1

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (<>
            <Header/>
            <UserInput userInput={userInput} handleChange={handleChange}/>
            {!isInputValid && <p className="center"> Please input duration greater than zero.</p>}
            {isInputValid && <Results userInput={userInput}/>}
        </>
    )
}

export default App
