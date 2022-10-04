const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const ulRef = document.querySelector(".gallery");


// const makeBoxImg = image => {
//   return `<li><img class = "img" src=${image.url} alt=${image.alt}/></li>`
// };

// const makeBox = images.map(makeBoxImg).join('');
// ulRef.insertAdjacentHTML(`afterbegin`, makeBox);




const ulRef = document.querySelector(`.gallery`);

const makeTag = elem => {
  return `<li><img class = "img" src=${elem.url} alt=${elem.alt}/></li>`;
};

const imgBox = images.map(makeTag).join('');
ulRef.insertAdjacentHTML(`afterbegin`, imgBox);