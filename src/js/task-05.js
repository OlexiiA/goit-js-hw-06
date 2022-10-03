const inputNameRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputNameRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 0) {
    nameOutputRef.textContent = "Anonymous";
    return;
  }
  nameOutputRef.textContent = event.currentTarget.value;
});