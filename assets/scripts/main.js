// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  if(localStorage.getItem('recipes') == null){
    return [];
  }
  return JSON.parse(localStorage.getItem('recipes'));
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO - Get a reference to the <main> element
  const mainElement = document.querySelector('main');
  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  // for (let index = 0; index < recipes.length; index++) {
  //   const card = document.createElement('recipe-card');
  //   card.data = recipes[index];
  //   mainElement.appendChild(card);
  // }
  for (const key in recipes) {
    const card = document.createElement('recipe-card');
     card.data = recipes[key];
     mainElement.appendChild(card);
  }
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  localStorage.setItem('recipes', JSON.stringify(recipes));
  //convert array to string localstorage js
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {

  // B2. TODO - Get a reference to the <form> element
  const form = document.querySelector('form');
  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  form.addEventListener('submit', fires);

  function fires(event){
    event.preventDefault();
    const formData = new FormData(form);//b4_create new FormData from <form> element
    const recipeObject = new Object();//b5_create an empty object, refers recipeObject
    //b5_extract key and values from the FormData object, and insert them to recipeObject
    for (const [key, value] of formData.entries()) {
      recipeObject[`${key}`] = `${value}`;
    }
    //b6_create a new <recipe-card> element
    const recipeCard = document.createElement('recipe-card');
    //b7_add the recipeObject data to <recipe-card>
    recipeCard.data = recipeObject;
    //b8_append this new <recipe-card> to <main>
    const mainElement = document.querySelector('main');
    mainElement.appendChild(recipeCard);
    //b9_get the recipe array from localStorage, add this new recipe to it, 
    //then save the recipes array back to localStorage
    let recipess = getRecipesFromStorage();
    recipess.push(recipeObject);
    saveRecipesToStorage(recipess);

  }

  // Steps B4-B9 will occur inside the event listener from step B3
  // B4. TODO - Create a new FormData object from the <form> element reference above
  // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
  //            make this easier to read), and then extract the keys and corresponding
  //            values from the FormData object and insert them into recipeObject
  // B6. TODO - Create a new <recipe-card> element
  // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
  // B8. TODO - Append this new <recipe-card> to <main>
  // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
  //            then save the recipes array back to localStorage

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  const clsButton = document.getElementsByClassName('danger')[0];
  // B11. TODO - Add a click event listener to clear local storage button
  clsButton.addEventListener('click', clearLocalStorage);
  function clearLocalStorage(){
    //b_12
    localStorage.clear();
    //b_13
    mainElement.innerHTML = "";


  }
  // Steps B12 & B13 will occur inside the event listener from step B11
  // B12. TODO - Clear the local storage
  // B13. TODO - Delete the contents of <main>

}
