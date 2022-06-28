import DOMstuff from "./domstuff";
import "./style.css";

const searchButton = document.querySelector(".search");
const inputField = document.getElementById("location");

searchButton.addEventListener("click", () => {
  const inputValue = document.getElementById("location").value;
  DOMstuff.populate(inputValue);
  DOMstuff.resetInput();
});

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchButton.click();
  }
});
