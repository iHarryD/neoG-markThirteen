import "./App.css";
import { useState } from "react";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [outputMessage, setOutputMessage] = useState(
    "Fill in the form and press the button to continue."
  );

  const palindromeTrueMessage = "Yay! Your birthday is a palindrome date.";
  const palindromeFalseMessage = "Nay! Your birthday is not a palindrome date.";

  function updatingInputData(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replaceAll("-", "");
    setDateOfBirth(inputValue);
  }

  function palindromeCheck() {
    let uNODateOfBirth = dateOfBirth.split("").reverse().join("");
    if (dateOfBirth === "") {
    } else if (dateOfBirth === uNODateOfBirth) {
      setOutputMessage(palindromeTrueMessage);
    } else {
      setOutputMessage(palindromeFalseMessage);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Is your birthdate palindrome?</h1>
      </header>
      <main>
        <div className="input-div">
          <label htmlFor="dob">Enter your date of birth:</label>
          <input
            onChange={(event) => updatingInputData(event)}
            type="date"
            name="dob"
            id="dob"
          />
        </div>
        <button onClick={palindromeCheck}>Check</button>
        <div className="output-div">{outputMessage}</div>
      </main>
      <footer>
        <ul id="social-media-tab">
          <li>
            <a className="social-media-links" href="https://github.com/iHarryD">
              GitHub
            </a>
          </li>
          <li>
            <a
              className="social-media-links"
              href="https://www.linkedin.com/in/prashant-kumar-a97251195/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p id="portfolio-link">
          Website created by{" "}
          <a href="https://iharryd.github.io/personal-portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
