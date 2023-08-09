import "./style.scss";
import { englishToMorse } from "./letters";

const englishInput = document.querySelector(
  "#english__input"
) as HTMLTextAreaElement;
const morseOutput = document.querySelector(
  "#morse__output"
) as HTMLTextAreaElement;

const englishSubmit = document.querySelector(
  ".english__submit"
) as HTMLButtonElement;

if (!englishInput || !morseOutput || !englishSubmit) {
  throw new Error("Issue with QS");
}

// let userInput = englishInput.value;
// console.log(userInput);

function returnText(event: Event) {
  event.preventDefault();
  let userInput = englishInput.value;

  const splitWord = userInput.toLowerCase().split("");
  // return splitWord; // ['h', 'e', 'y', ' ', 't', 'h', 'e', 'r', 'e']
  const convertedArr = splitWord.map((key) => {
    // console.log(englishToMorse[key]);
    return englishToMorse[key];
  });
  // return convertedArr.join(" ");
  // morseOutput.value += convertedArr.join(" ");
  const finalOutput = convertedArr.join(" ");
  morseOutput.value = finalOutput;
}

englishSubmit.addEventListener("click", returnText);
// morseOutput.value = translateEnglishToMorse;

// const translateEnglishToMorse = (input: string) => {
//   const splitWord = input.toLowerCase().split("");
//   // return splitWord; // ['h', 'e', 'y', ' ', 't', 'h', 'e', 'r', 'e']
//   const convertedArr = splitWord.map((key) => {
//     // console.log(englishToMorse[key]);
//     return englishToMorse[key];
//   });
//   return convertedArr.join(" ");
//   // morseOutput.value += convertedArr.join(" ");
//   // console.log(convertedArr.join(" "));
// };

// morseOutput.value = translateEnglishToMorse("Hey there");
// morseOutput.value = translateEnglishToMorse();

// for (const key in englishToMorse) {
//   console.log(key);
//   if (key == englishInput.textContent) {
//     console.log(key[value]);
//   }
// }
// englishSubmit.addEventListener("submit", translateEnglishToMorse);

// Retrieve input
// Split input
// Swap each key for value
