import { recipies, ingredients, procedureArray, savedArray, savedArrayIngredients, savedProcedure } from "./selectionscript.js";
let all=document.querySelector('.all');
let filterBtns=document.querySelectorAll('button');
let content=document.querySelector('.content');
let filterArray=[];
let quickToMake=[];
let southIndian=[];
let northIndian=[];
let healthy=[];
let chinesse=[];
let usingArray=[];
let flagArray=['N','S','C','Q','H','UD'];
let complete=document.createElement('div');
let uIndex=0;

checkFunc();
setFunc();
loadSavedFavorites();

filterBtns.forEach(btn=>{
    btn.addEventListener('click', function () {
        filterArray.push(btn.innerHTML);
        btn.style.backgroundColor='bisque';
        console.log(filterArray);
        checkFunc();
    });
});

function allRecipies () {
    recipies.forEach((r,index)=>{
        let up=document.createElement('div');
        up.classList.add('up');
        let down=document.createElement('div');
        down.classList.add('down');
        all.appendChild(up);
        all.appendChild(down);
        let name=document.createElement('div');
        name.innerHTML=r;
        name.classList.add('details');
        let ingre=document.createElement('div');
        ingre.innerHTML=ingredients[index];
        ingre.classList.add('details');
        let procedure=document.createElement('div');
        procedure.innerHTML='PROCEDURE';
        procedure.classList.add('procedure');
        let save=document.createElement('div');
        save.innerHTML='SAVE';
        save.classList.add('procedure');
        up.appendChild(name);
        up.appendChild(ingre);
        up.appendChild(procedure);
        up.appendChild(save);
        procedure.addEventListener('click', function () {
            let proDet=document.createElement('div');
            proDet.innerHTML=procedureArray[index];
            proDet.classList.add('details');
            down.appendChild(proDet);
        });
        save.addEventListener('click',function () {
            savedArray.push(recipies[index]);
            savedArrayIngredients.push(ingredients[index]);
            savedProcedure.push(procedureArray[index]);
            console.log(savedArray);
            console.log(savedArrayIngredients);
            savingFavorites();
        });
    });
}

function setFunc () {
    for(let i=0;i<recipies.length;i++){
        if(i%5==0){
            quickToMake.push(`${recipies[i]}_${i}`);
        }
        if(i%9==0){
            southIndian.push(`${recipies[i]}_${i}`);
        }
        if(i%3==0){
            northIndian.push(`${recipies[i]}_${i}`);
        }
        if(i%8==0){
            chinesse.push(`${recipies[i]}_${i}`);
        }
        if(i%7==0){
            healthy.push(`${recipies[i]}_${i}`);
        }
    }
}

function filteredRecipies () {
    for(let i=0;i<filterArray.length;i++){
        if(filterArray[i]=='NORTH INDIAN' && flagArray[0]==='N'){
            northIndian.forEach(n=>{
                usingArray.push(n);
            });
            flagArray[0]='a';
        }
        else if(filterArray[i]=='SOUTH INDIAN' && flagArray[1]==='S'){
            southIndian.forEach(s=>{
                usingArray.push(s);
            });
            flagArray[1]='s';
        }
        else if(filterArray[i]=='CHINESSE' && flagArray[2]==='C'){
            chinesse.forEach(c=>{
                usingArray.push(c);
            });
            flagArray[2]='c';
        }
        else if(filterArray[i]=='QUICK TO MAKE' && flagArray[3]==='Q'){
            quickToMake.forEach(q=>{
                usingArray.push(q);
            });
            flagArray[3]='q';
        }
        else if(filterArray[i]=='HEALTHY' && flagArray[4]==='H'){
            healthy.forEach(h=>{
                usingArray.push(h);
            });
            flagArray[4]='h';
        }
    }
    console.log(usingArray);
    if(flagArray[5]==='UD'){
    complete.classList.add('all');
    content.appendChild(complete);
    flagArray[5]='ud';
}
writeFiltered();
}

function writeFiltered () {
    for(let i=uIndex+1;i<usingArray.length;i++){
        let U=usingArray[i].split("_");
        let up=document.createElement('div');
        let down=document.createElement('div');
        up.classList.add('up');
        down.classList.add('down');
        complete.appendChild(up);
        complete.appendChild(down);
        let name=document.createElement('div');
        name.classList.add('details');
        name.innerHTML=U[0];
        let ingre=document.createElement('div');
        ingre.innerHTML=ingredients[parseInt(U[1])];
        ingre.classList.add('details');
        let procedure=document.createElement('div');
        procedure.innerHTML='PROCEDURE';
        procedure.classList.add('procedure');
        let save=document.createElement('div');
        save.innerHTML='SAVE';
        save.classList.add('procedure');
        up.appendChild(name);
        up.appendChild(ingre);
        up.appendChild(procedure);
        up.appendChild(save);
        procedure.addEventListener('click', function () {
            let proDet=document.createElement('div');
            proDet.innerHTML=procedureArray[parseInt(U[1])];
            proDet.classList.add('details');
            down.appendChild(proDet);
        });
        uIndex=i;
    }
}

 function checkFunc () {
    if(filterArray.length==0){
        allRecipies();
    }
    else if(filterArray.length>0){
        all.remove();
        filteredRecipies();
    }
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