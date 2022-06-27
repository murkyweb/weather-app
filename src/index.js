import DOMstuff from "./domstuff";
import "./style.css";

const searchButton = document.querySelector(".search");
searchButton.addEventListener("click", () => {
  const input = document.getElementById("location").value;
  DOMstuff.populate(input);
});
