import "./style.scss";
import { returnText } from "./translateFunction";
import { englishSubmit } from "./querySelectors";

englishSubmit.addEventListener("click", returnText);
