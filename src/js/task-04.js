let counterValue = 0;

const btnDecrementRef = document.querySelector(`[data-action="decrement"]`);
const btnIncrementRef = document.querySelector(`[data-action="increment"]`);
const valueViewRef = document.querySelector(`#value`);


btnDecrementRef.addEventListener("click", () => {
    counterValue -= 1;
    valueViewRef.textContent = counterValue;
});

btnIncrementRef.addEventListener("click", () => {
    counterValue += 1;
    valueViewRef.textContent = counterValue;
});




