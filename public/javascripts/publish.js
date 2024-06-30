import { savedArray, savedArrayIngredients, savedProcedure } from "./selectionscript.js";

let recipesArray=[];
let flag=false;
let showPublished=document.querySelector('.show-published');

loadPublishedRecipes();
writePublished();
loadSavedFavorites();

function handleFormSubmit(event) {
    event.preventDefault();

    const publisher = document.getElementById('publisher').value;
    console.log(publisher);
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const procedure = document.getElementById('procedure').value;

    const recipe = {
        publisher: publisher,
        name: name,
        ingredients: ingredients,
        procedure: procedure
    };

    recipesArray.push(recipe);

    console.log(recipesArray);

    document.getElementById('publish-form').reset();
    savePublished();
    writePublished();
}

document.getElementById('publish-form').addEventListener('submit', handleFormSubmit);

function writePublished () {
    let loadedString=localStorage.getItem('published');
    recipesArray=JSON.parse(loadedString);
    console.log(recipesArray);
    if(flag){
        let recipe=recipesArray.slice(-1)[0];
        let newDiv=document.createElement('div');
        showPublished.appendChild(newDiv);
        let publisherName=document.createElement('div');
        publisherName.innerHTML=`PUBLISHED BY - ${recipe.publisher}`;
        publisherName.classList.add('details');
        newDiv.appendChild(publisherName);
        let up=document.createElement('div');
        up.classList.add('up');
        let down=document.createElement('div');
        down.classList.add('down');
        newDiv.appendChild(up);
        newDiv.appendChild(down);
        let name=document.createElement('div');
        name.classList.add('details');
        name.innerHTML=`NAME : ${recipe.name}`;
        up.appendChild(name);
        let ingredients=document.createElement('div');
        ingredients.classList.add('details');
        ingredients.innerHTML=`INGREDIENTS : ${recipe.ingredients}`;
        up.appendChild(ingredients);
        let procedure=document.createElement('div');
        procedure.innerHTML="PROCEDURE";
        procedure.classList.add('procedure');
        up.appendChild(procedure);
        let save=document.createElement('div');
        save.innerHTML="SAVE";
        save.classList.add('procedure');
        up.appendChild(save);
        procedure.addEventListener('click', function () {
            let proDetails=document.createElement('div');
            proDetails.innerHTML=recipe.procedure;
            down.appendChild(proDetails);
        });
        save.addEventListener('click',function () {
            savedArray.push(recipe.name);
            savedArrayIngredients.push(recipe.ingredients);
            savedProcedure.push(recipe.procedure);
            console.log(savedArray);
            console.log(savedArrayIngredients);
            savingFavorites();
        });
    }
    else {
    recipesArray.forEach((recipe)=>{
        let newDiv=document.createElement('div');
        showPublished.appendChild(newDiv);
        let publisherName=document.createElement('div');
        publisherName.innerHTML=`PUBLISHED BY - ${recipe.publisher}`;
        publisherName.classList.add('details');
        newDiv.appendChild(publisherName);
        let up=document.createElement('div');
        up.classList.add('up');
        let down=document.createElement('div');
        down.classList.add('down');
        newDiv.appendChild(up);
        newDiv.appendChild(down);
        let name=document.createElement('div');
        name.classList.add('details');
        name.innerHTML=`NAME : ${recipe.name}`;
        up.appendChild(name);
        let ingredients=document.createElement('div');
        ingredients.classList.add('details');
        ingredients.innerHTML=`INGREDIENTS : ${recipe.ingredients}`;
        up.appendChild(ingredients);
        let procedure=document.createElement('div');
        procedure.innerHTML="PROCEDURE";
        procedure.classList.add('procedure');
        up.appendChild(procedure);
        let save=document.createElement('div');
        save.innerHTML="SAVE";
        save.classList.add('procedure');
        up.appendChild(save);
        procedure.addEventListener('click', function () {
            let proDetails=document.createElement('div');
            proDetails.innerHTML=recipe.procedure;
            down.appendChild(proDetails);
        });
        save.addEventListener('click',function () {
            savedArray.push(recipe.name);
            savedArrayIngredients.push(recipe.ingredients);
            savedProcedure.push(recipe.procedure);
            console.log(savedArray);
            console.log(savedArrayIngredients);
            savingFavorites();
        });
    });
}
flag=true;
}

function savePublished () {
    let publishedArrayString=JSON.stringify(recipesArray);
    localStorage.setItem('published', publishedArrayString);
}

function savingFavorites () {
    let savedString=JSON.stringify(savedArray);
    localStorage.setItem('savedArray', savedString);
    let savedIngredientsString=JSON.stringify(savedArrayIngredients);
    localStorage.setItem('savedIngredients', savedIngredientsString);
    let savedProcedureString=JSON.stringify(savedProcedure);
    localStorage.setItem('savedprocedure', savedProcedureString);
}


function loadSavedFavorites() {
    let savedFavString = localStorage.getItem('savedArray');
    if (savedFavString) {
        let favArray = JSON.parse(savedFavString);
        savedArray.length = 0;
        favArray.forEach(item => savedArray.push(item)); 
    }
    console.log(savedArray);
    
    let favIngredients = localStorage.getItem('savedIngredients');
    if (favIngredients) {
        let ingArray = JSON.parse(favIngredients);
        savedArrayIngredients.length = 0; 
        ingArray.forEach(item => savedArrayIngredients.push(item)); 
    }
    console.log(savedArrayIngredients);

    let proArrayString = localStorage.getItem('savedprocedure');
    if (proArrayString) {
        let proArray = JSON.parse(proArrayString);
        savedProcedure.length = 0; 
        proArray.forEach(item => savedProcedure.push(item)); 
    }
    console.log(savedProcedure);
}

function loadPublishedRecipes() {
    let loadedString = localStorage.getItem('published');
    if (loadedString) {
        recipesArray = JSON.parse(loadedString);
    }
    console.log(recipesArray);
}