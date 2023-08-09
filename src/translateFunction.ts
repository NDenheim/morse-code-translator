import "./style.scss";
import { englishInput, morseOutput } from "./querySelectors";
import { englishToMorse } from "./letters";

export function returnText(event: Event) {
  event.preventDefault();
  let userInput = englishInput.value;

  const splitWord = userInput.toLowerCase().split("");
  const convertedArr = splitWord.map((key) => {
    return englishToMorse[key];
  });

  const finalOutput = convertedArr.join(" ");
  morseOutput.value = finalOutput;
}
