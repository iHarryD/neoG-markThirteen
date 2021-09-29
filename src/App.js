import "./App.css";
import { useState } from "react";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [outputMessage, setOutputMessage] = useState(
    "Fill in the form and press the button to continue."
  );

  const palindromeTrueMessage = "Yay! Your birthday is a palindrome date.";
  const palindromeFalseMessage = "Nay! Your birthday is not a palindrome date.";

  let fullDate = {
    date: 0,
    month: 0,
    year: 0,
  };

  function clickHandler() {
    let dateOfBirthList = dateOfBirth.split("-");
    fullDate.date = dateOfBirthList[2];
    fullDate.month = dateOfBirthList[1];
    fullDate.year = dateOfBirthList[0];
    allDateFormats(fullDate);
  }

  function allDateFormats(fullDate) {
    let mmddyyyyFullDateString = fullDate.month + fullDate.date + fullDate.year;
    let mmddyyFullDateString =
      fullDate.month + fullDate.date + fullDate.year.slice(2, 4);
    let ddmmyyFullDateString =
      fullDate.date + fullDate.month + fullDate.year.slice(2, 4);
    let ddmmyyyyFullDateString = fullDate.date + fullDate.month + fullDate.year;
    let yyyymmddFullDateString = fullDate.year + fullDate.month + fullDate.date;
    let yymmddFullDateString =
      fullDate.year.slice(2, 4) + fullDate.month + fullDate.date;
    allFormatPalindromeCheck([
      mmddyyyyFullDateString,
      mmddyyFullDateString,
      ddmmyyFullDateString,
      ddmmyyyyFullDateString,
      yyyymmddFullDateString,
      yymmddFullDateString,
    ]);
  }

  function unoReverseMaker(normalString) {
    let unoString = normalString.split("").reverse().join("");
    return unoString;
  }

  function allFormatPalindromeCheck(allDateFormats) {
    let isPalindrome = false;
    allDateFormats.forEach((format) => {
      console.log(format);
      console.log(unoReverseMaker(format));
      if (format === unoReverseMaker(format)) {
        isPalindrome = true;
        console.log(isPalindrome, "if");
      }
    });

    if (isPalindrome === true) {
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
            type="date"
            name="dob"
            id="dob"
            onChange={(event) => {
              setDateOfBirth(event.target.value);
            }}
          />
        </div>
        <button onClick={clickHandler}>Check</button>
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
