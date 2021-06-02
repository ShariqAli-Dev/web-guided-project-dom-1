// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')[0];
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.getElementsByClassName('card')[0];

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('.card-title');
const subtitleFirstCard = firstCard.querySelector('.card-subtitle');
const textFirstCard = firstCard.querySelector('.card-text');

// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const anchorTags = document.querySelectorAll('nav a');

// B- Loop over the links and console.log their text content
anchorTags.forEach(element => console.log(element));

// C- Turn the collection of links into a real array
const anchorTagsArray = Array.from(anchorTags);

// D- Use .filter to find the anchor tag with the textContent of "Home"
const anchorContent = anchorTagsArray.filter(a => a.textContent === 'Home');


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
imageFirstCard.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*';
titleFirstCard.textContent = 'WOOF WOOF '
link2FirstCard.alt = 'Dog Ipsum'
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
link2FirstCard.classList.add('pink-text');

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.classList.add('menue-item');
blogLink.href = '#';
const nav = document.querySelector('nav');
nav.appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const anotherCard = firstCard.cloneNode(true);
const cardContainer = document.querySelector('.card-group');
cardContainer.appendChild(anotherCard);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]