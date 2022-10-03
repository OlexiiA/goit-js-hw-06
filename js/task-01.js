const ulRef = document.querySelector("#categories");

const liRef = ulRef.querySelectorAll("li.item");
console.log("Number of categories:", liRef.length);


liRef.forEach((elem) => {
    const h2Ref = elem.querySelector("h2");
    const elements = elem.querySelectorAll("li");
    console.log(`Category: ${h2Ref.textContent}`);
    console.log("Elements:", elements.length);
    
})




