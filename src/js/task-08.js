// const formRef = document.querySelector(".login-form");
// const formData = {};

// formRef.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   if (
//     !event.currentTarget.elements.email.value ||
//     !event.currentTarget.elements.password.value
//   ) {
//     alert("Все поля дожны быть заполены!");
//   }
//   formData.email = event.currentTarget.elements.email.value;
//   formData.password = event.currentTarget.elements.password.value;
//   event.currentTarget.reset();
// }
// console.log(formData);




const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля дожны быть заполены!");
  } else {
    const view = {
      email: email.value,
      password: password.value
    }
    console.log(view);
    event.currentTarget.reset();
  }
}