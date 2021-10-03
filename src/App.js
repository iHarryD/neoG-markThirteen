import "./App.css";
import { useState } from "react";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [outputMessage, setOutputMessage] = useState(
    "Enter a date and press the button to continue."
  );

  const errorMessage = "You need to enter a date first to continue.";
  const palindromeTrueMessage = "Yay! Your birthday is a palindrome date.";
  const palindromeFalseMessage = "Nay! Your birthday is not a palindrome date.";
  const dateOfBirthObj = dateStringToDateObject(dateOfBirth);

  function clickHandler() {
    dateStringToDateObject(dateOfBirth);
    if (dateOfBirth === "") {
      setOutputMessage(errorMessage);
    } else {
      if (
        allFormatPalindromeCheck(
          allDateFormats(dateStringToDateObject(dateOfBirth))
        )
      ) {
        setOutputMessage(palindromeTrueMessage);
      } else {
        setOutputMessage(
          `${palindromeFalseMessage} Closest palindrome date to your date of birth is ${findingClosestPalindromeDate(
            findingPreviousPalindromeDate(dateOfBirth),
            findingNextPalindromeDate(dateOfBirth)
          )}.`
        );
      }
    }
  }

  function dateStringToDateObject(dateAsString) {
    let dateOfBirthList = dateAsString.split("-");
    let fullDate = { date: "", month: "", year: "" };
    fullDate.date = dateOfBirthList[2];
    fullDate.month = dateOfBirthList[1];
    fullDate.year = dateOfBirthList[0];
    return fullDate;
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
    return [
      mmddyyyyFullDateString,
      mmddyyFullDateString,
      ddmmyyFullDateString,
      ddmmyyyyFullDateString,
      yyyymmddFullDateString,
      yymmddFullDateString,
    ];
  }

  function unoReverseMaker(normalString) {
    let unoString = normalString.split("").reverse().join("");
    return unoString;
  }

  function allFormatPalindromeCheck(allDateFormats) {
    let isPalindrome = false;
    allDateFormats.forEach((format) => {
      if (format === unoReverseMaker(format)) {
        isPalindrome = true;
      }
    });
    return isPalindrome;
  }

  function isLeapYear(year) {
    let yearNumber = Number(year);
    if (yearNumber % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }

  function findingNextPalindromeDate(currentDate) {
    let currentFullDate = dateStringToDateObject(currentDate);

    let noOfDaysInMonthsInOrder = [
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
    ];

    if (isLeapYear(currentFullDate.year)) {
      noOfDaysInMonthsInOrder[1] = 29;
    } else {
      noOfDaysInMonthsInOrder[1] = 28;
    }

    while (
      allFormatPalindromeCheck(allDateFormats(currentFullDate)) === false
    ) {
      currentFullDate.date++;
      if (
        currentFullDate.date >
        noOfDaysInMonthsInOrder[currentFullDate.month - 1]
      ) {
        currentFullDate.date = 1;
        currentFullDate.month++;
        if (currentFullDate.month > 12) {
          currentFullDate.month = 1;
          currentFullDate.year++;
          currentFullDate.year = currentFullDate.year.toString();
        }
        if (currentFullDate.month < 10) {
          currentFullDate.month = "0" + currentFullDate.month;
        } else {
          currentFullDate.month = currentFullDate.month.toString();
        }
      }
      if (currentFullDate.date < 10) {
        currentFullDate.date = "0" + currentFullDate.date;
      } else {
        currentFullDate.date = currentFullDate.date.toString();
      }
    }
    return currentFullDate;
  }

  function findingPreviousPalindromeDate(currentDate) {
    let currentFullDate = dateStringToDateObject(currentDate);

    let noOfDaysInMonthsInOrder = [
      31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
    ];

    if (isLeapYear(currentFullDate.year)) {
      noOfDaysInMonthsInOrder[1] = 29;
    } else {
      noOfDaysInMonthsInOrder[1] = 28;
    }

    while (
      allFormatPalindromeCheck(allDateFormats(currentFullDate)) === false
    ) {
      currentFullDate.date--;
      if (currentFullDate.date === 0) {
        currentFullDate.month--;
        if (currentFullDate.month === 0) {
          currentFullDate.month = "12";
          currentFullDate.year--;
          currentFullDate.year = currentFullDate.year.toString();
        } else if (currentFullDate.month < 10) {
          currentFullDate.month = "0" + currentFullDate.month;
        } else {
          currentFullDate.month = currentFullDate.month.toString();
        }
        currentFullDate.date =
          noOfDaysInMonthsInOrder[currentFullDate.month - 1];

        currentFullDate.date = currentFullDate.date.toString();
      }
      if (currentFullDate.date < 10) {
        currentFullDate.date = "0" + currentFullDate.date;
      } else {
        currentFullDate.date = currentFullDate.date.toString();
      }
    }
    return currentFullDate;
  }

  function findingClosestPalindromeDate(
    previousPalindromeDate,
    nextPalindromeDate
  ) {
    let toReturnVal;
    let previousPalindromeYearAndYearOfBirthDifference =
      Number(dateOfBirthObj.year) - Number(previousPalindromeDate.year);
    let nextPalindromeYearAndYearOfBirthDifference =
      Number(dateOfBirthObj.year) - Number(nextPalindromeDate.year);
    let previousPalindromeMonthAndMonthOfBirthDifference =
      Number(dateOfBirthObj.month) - Number(previousPalindromeDate.month);
    let nextPalindromeMonthAndMonthOfBirthDifference =
      Number(dateOfBirthObj.month) - Number(nextPalindromeDate.month);
    let previousPalindromeDateAndDateOfBirthDifference =
      Number(dateOfBirthObj.date) - Number(previousPalindromeDate.date);
    let nextPalindromeDateAndDateOfBirthDifference =
      Number(dateOfBirthObj.date) - Number(nextPalindromeDate.date);
    if (
      Math.abs(previousPalindromeYearAndYearOfBirthDifference) >
      Math.abs(nextPalindromeYearAndYearOfBirthDifference)
    ) {
      toReturnVal = nextPalindromeDate;
    } else if (
      Math.abs(nextPalindromeYearAndYearOfBirthDifference) >
      Math.abs(previousPalindromeYearAndYearOfBirthDifference)
    ) {
      toReturnVal = previousPalindromeDate;
    } else {
      if (
        Math.abs(previousPalindromeMonthAndMonthOfBirthDifference) >
        Math.abs(nextPalindromeMonthAndMonthOfBirthDifference)
      ) {
        toReturnVal = nextPalindromeDate;
      } else if (
        Math.abs(nextPalindromeMonthAndMonthOfBirthDifference) >
        Math.abs(previousPalindromeMonthAndMonthOfBirthDifference)
      ) {
        toReturnVal = previousPalindromeDate;
      } else {
        if (
          Math.abs(previousPalindromeDateAndDateOfBirthDifference) >
          Math.abs(nextPalindromeDateAndDateOfBirthDifference)
        ) {
          toReturnVal = nextPalindromeDate;
        } else if (
          Math.abs(nextPalindromeDateAndDateOfBirthDifference) >
          Math.abs(previousPalindromeDateAndDateOfBirthDifference)
        ) {
          toReturnVal = previousPalindromeDate;
        } else {
          toReturnVal = previousPalindromeDate;
        }
      }
    }
    let closestPalindromeDateStr = `${toReturnVal.month}-${toReturnVal.date}-${toReturnVal.year}`;
    return closestPalindromeDateStr;
  }

  return (
    <div className="App">
      <header>
        <h1>Is your birthdate palindrome?</h1>
      </header>
      <main>
        <div className="input-div">
          <label htmlFor="dob">
            Enter your date of birth:{" "}
            <span id="date-format-span">(mm/dd/yyyy)</span>
          </label>
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
          <a href="https://iharryd.github.io/portfolio/">Harry</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
