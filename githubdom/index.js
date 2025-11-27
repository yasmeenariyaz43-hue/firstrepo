
// 2. Select all p elements using getElementsByTagName and set their text color to blue
const pElements = document.getElementsByTagName('p');
// getElementsByTagName returns an HTMLCollection, so we iterate using a standard for loop
for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.color = 'blue';
}



// 3. Use querySelector to select the first div with the class container and change its background color to yellow
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = 'yellow';
