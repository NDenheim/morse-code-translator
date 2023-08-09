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

export { englishInput, morseOutput, englishSubmit };
