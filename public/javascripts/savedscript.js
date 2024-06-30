let favArray=[];
let ingArray=[];
let proArray=[];
let content=document.querySelector(".content");
let parent=document.querySelector("#parent");

function loadSavedFavorites () {
    let savedFavString=localStorage.getItem('savedArray');
    favArray=JSON.parse(savedFavString);
    console.log(favArray);
    let favIngredients=localStorage.getItem('savedIngredients');
    ingArray=JSON.parse(favIngredients);
    console.log(ingArray);
    let proArrayString=localStorage.getItem('savedprocedure');
    proArray=JSON.parse(proArrayString);
}

function savingFavorites() {
    let savedString = JSON.stringify(favArray);
    localStorage.setItem('savedArray', savedString);
    let savedIngredientsString = JSON.stringify(ingArray);
    localStorage.setItem('savedIngredients', savedIngredientsString);
    let savedProcedureString = JSON.stringify(proArray);
    localStorage.setItem('savedprocedure', savedProcedureString);
}

loadSavedFavorites();

function writeSaved () {
    let newDiv=document.createElement('div');
    newDiv.classList.add('details-of-recipies');
    content.appendChild(newDiv);
    favArray.forEach((fav,favIndex)=>{
        let up=document.createElement('div');
        up.classList.add('up');
        let down=document.createElement('div');
        down.classList.add('down');
        newDiv.appendChild(up);
        newDiv.appendChild(down);
        let name=document.createElement('div');
        name.innerHTML=`NAME : ${fav}`;
        let ingredients=document.createElement('div');
        ingredients.innerHTML=`INGREDIENTS : ${ingArray[favIndex]}`;
        let procedure=document.createElement('div');
        procedure.innerHTML='PROCEDURE';
        procedure.classList.add('procedure');
        let remove=document.createElement('div');
        remove.innerHTML='REMOVE';
        remove.classList.add('procedure');
        up.appendChild(name);
        up.appendChild(ingredients);
        up.appendChild(procedure);
        up.appendChild(remove);
        procedure.addEventListener('click', function () {
            let proDetails=document.createElement('div');
            proDetails.innerHTML=proArray[favIndex];
            down.appendChild(proDetails);
        });
        remove.addEventListener('click', function () {
            proArray.splice(favIndex,1);
            ingArray.splice(favIndex,1);
            favArray.splice(favIndex,1);
            newDiv.remove();
            savingFavorites();
            writeSaved();
        });
    });
}
writeSaved();