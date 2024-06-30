let listOfIngredients=document.querySelectorAll(".list-of-ingredients span");
let selectedIngredients=document.querySelector(".selected-ingredients");
let selectedArray=[];
export let savedArray=[];
export let savedArrayIngredients=[];
export let savedProcedure=[];
let checkBtn=document.querySelector(".check-btn");
let content=document.querySelector('.content');
let clearBtn=document.querySelector(".clear-btn");
export let recipies=['Turmeric Cumin Potatoes', 'Coriander Garam Masala Chicken', 'Mustard Seeds Fenugreek Fish Curry', 'Cardamom Cloves Rice', 'Curry Leaves Asafoetida Dal', 'Ginger Garlic Chicken', 'Red Chili Powder Chickpea Curry', 'Coconut Milk Turmeric Curry', 'Tamarind Date Chutney', 'Paneer Fenugreek Saag', 'Cilantro Saffron Rice', 'Bay Leaf Black Cardamom Pulao', 'Fennel Seeds Nigella Seeds Aloo', 'Poppy Seeds Amchur Fish', 'Ajwain Chickpea Flour Bread', 'Chaat Masala Chickpea Salad', 'Kasuri Methi Paneer', 'Panch Phoron Potato Curry', 'Rice Flour Coconut Ladoo', 'Almonds Cashew Pistachio Kheer', 'Black Pepper Mustard Oil Chicken', 'Curry Powder Chana Masala', 'Raita Cumin Potato Salad', 'Chutney Masala Papad', 'Turmeric Coriander Eggs', 'Ginger Garlic Tamarind Chicken', 'Yogurt Saffron Dessert', 'Cardamom Cloves Milk Tea', 'Mustard Seeds Fenugreek Potatoes', 'Cumin Red Chili Powder Beans', 'Coconut Milk Turmeric Cauliflower', 'Tamarind Date Ginger Chutney', 'Paneer Fenugreek Matar', 'Cilantro Saffron Pulao', 'Bay Leaf Black Cardamom Lamb Curry', 'Fennel Seeds Nigella Seeds Potatoes', 'Poppy Seeds Amchur Chicken', 'Ajwain Chickpea Flour Pancake', 'Chaat Masala Chickpea Chaat', 'Kasuri Methi Chicken Curry', 'Panch Phoron Potatoes', 'Rice Flour Coconut Burfi', 'Almonds Cashew Pistachio Halwa', 'Black Pepper Mustard Oil Fish Curry', 'Curry Powder Chickpea Stew', 'Raita Cumin Carrot Salad', 'Chutney Masala Sandwich', 'Turmeric Coriander Chickpea Curry', 'Ginger Garlic Tamarind Lamb', 'Yogurt Saffron Rice Pudding'];


export let ingredients=['Potatoes Turmeric Cumin Garlic Green-Chilies', 'Chicken Coriander Garam-Masala Garlic Yogurt', 'Fish Mustard-Seeds Fenugreek Turmeric Tomatoes', 'Basmati-Rice Cardamom Cloves Cinnamon Ghee', 'Lentils-(Dal) Curry-Leaves Asafoetida Ginger Tomatoes', 'Chicken Ginger Garlic Turmeric Yogurt', 'Chickpeas Red-Chili-Powder Cumin Tomatoes Onions', 'Vegetables Coconut-Milk Turmeric Mustard-Seeds Curry-Leaves', 'Tamarind Dates Ginger Jaggery Cumin', 'Paneer Fenugreek Spinach Garlic Cream', 'Basmati-Rice Cilantro Saffron Cloves Ghee', 'Basmati-Rice Bay-Leaf Black-Cardamom Cinnamon Ghee', 'Potatoes Fennel-Seeds Nigella-Seeds Turmeric Green-Chilies', 'Fish Poppy-Seeds Amchur-Powder Garlic Yogurt', 'Chickpea-Flour Ajwain Turmeric Green-Chilies Yogurt', 'Chickpeas Chaat-Masala Onions Tomatoes Cilantro', 'Paneer Kasuri-Methi Tomatoes Cream Ghee', 'Potatoes Panch-Phoron Turmeric Tomatoes Mustard-Oil', 'Rice-Flour Coconut Jaggery Cardamom Ghee', 'Milk Almonds Cashews Pistachios Saffron', 'Chicken Black-Pepper Mustard-Oil Garlic Yogurt', 'Chickpeas Curry-Powder Onions Tomatoes Cilantro', 'Potatoes Yogurt Cumin Garlic Mint', 'Papad Chutney Red-Chili-Powder Garlic Tomatoes', 'Eggs Turmeric Coriander Green-Chilies Onions', 'Chicken Ginger Garlic Tamarind Tomatoes', 'Yogurt Saffron Honey Almonds Pistachios', 'Milk Cardamom Cloves Black Tea Leaves Sugar', 'Potatoes Mustard-Seeds Fenugreek Turmeric Ginger', 'Beans Cumin Red-Chili-Powder Garlic Tomatoes', 'Cauliflower Coconut-Milk Turmeric Curry-Leaves Mustard-Seeds', 'Tamarind Dates Ginger Jaggery Red-Chili-Powder', 'Paneer Fenugreek Peas Tomatoes Cream', 'Basmati-Rice Cilantro Saffron Garlic Ghee', 'Lamb Bay-Leaf Black-Cardamom Cinnamon Yogurt', 'Potatoes Fennel-Seeds Nigella-Seeds Turmeric Onions', 'Chicken Poppy-Seeds Amchur-Powder Garlic Yogurt', 'Chickpea-Flour Ajwain Turmeric Green-Chilies Yogurt', 'Chickpeas Chaat-Masala Onions Tomatoes Cilantro', 'Chicken Kasuri-Methi Tomatoes Cream Ghee', 'Potatoes Panch-Phoron Turmeric Tomatoes Mustard-Oil', 'Rice-Flour Coconut Jaggery Cardamom Ghee', 'Milk Almonds Cashews Pistachios Saffron', 'Fish Black-Pepper Mustard-Oil Garlic Yogurt', 'Chickpeas Curry-Powder Onions Tomatoes Cilantro', 'Carrots Yogurt Cumin Garlic Mint', 'Bread Chutney Red-Chili-Powder Garlic Tomatoes', 'Chickpeas Turmeric Coriander Green-Chilies Onions', 'Lamb Ginger Garlic Tamarind Tomatoes', 'Basmati-Rice Yogurt Saffron Honey Almonds'];


export let procedureArray=['Boil potatoes until tender. Heat oil, add cumin seeds until they splutter. Add turmeric, potatoes, and salt. Cook until golden',
'Marinate chicken in garam masala, coriander powder, yogurt, and salt. Cook in a pan until golden brown',
'Fry mustard seeds, fenugreek seeds. Add turmeric, tomatoes, and fish. Simmer until fish is cooked',
'Fry cardamom, cloves in ghee. Add rice, water, salt. Cook until rice is fluffy',
'Cook lentils with water, salt. Fry curry leaves, asafoetida in ghee. Mix with dal',
'Fry ginger, garlic. Add chicken, turmeric, salt. Cook until chicken is tender',
'Fry red chili powder, cumin. Add chickpeas, tomatoes, salt. Cook until thickened',
'Fry mustard seeds, turmeric. Add coconut milk, vegetables, salt. Simmer until vegetables are tender',
'Boil tamarind, dates, jaggery with water. Blend with ginger, cumin until smooth',
'Fry paneer until golden. Blend spinach, fenugreek leaves. Add cream, salt, cook with paneer',
'Fry saffron in ghee. Add rice, water, cilantro, salt. Cook until rice is fluffy',
'Fry bay leaf, black cardamom in ghee. Add rice, water, salt. Cook until rice is fluffy',
'Fry fennel seeds, nigella seeds in oil. Add potatoes, turmeric, green chilies, salt. Cook until potatoes are tender',
'Blend poppy seeds, amchur powder, garlic. Marinate fish with this paste, yogurt, salt. Grill or fry until fish is cooked',
'Mix chickpea flour, ajwain, turmeric, green chilies, yogurt. Cook as pancake on a griddle until golden',
'Mix chickpeas, chaat masala, onions, tomatoes, cilantro. Season with lemon juice, salt',
'Fry paneer until golden. Add kasuri methi, tomatoes, cream, salt. Cook until tomatoes are soft',
'Fry panch phoron in mustard oil. Add potatoes, turmeric, tomatoes, salt. Cook until potatoes are tender',
'Cook rice flour, coconut, jaggery in ghee. Shape into balls, garnish with cardamom',
'Boil milk, almonds, cashews, pistachios, saffron, sugar. Simmer until thickened',
'Fry black pepper in mustard oil. Add chicken, garlic, yogurt, salt. Cook until chicken is tender',
'Fry curry powder, onions. Add chickpeas, tomatoes, cilantro, salt. Cook until thickened',
'Mix yogurt, roasted cumin, boiled potatoes, garlic, mint, salt. Chill before serving',
'Spread chutney on papad. Sprinkle red chili powder, garlic, tomatoes. Serve immediately',
'Fry turmeric, coriander, green chilies in oil. Add beaten eggs, onions, salt. Cook until eggs are set',
'Fry ginger, garlic. Add chicken, tamarind paste, tomatoes, salt. Simmer until chicken is cooked',
'Mix yogurt, saffron, honey, almonds, pistachios. Chill before serving',
'Boil milk with cardamom, cloves, black tea leaves, sugar. Strain and serve hot',
'Fry mustard seeds, fenugreek in oil. Add potatoes, turmeric, ginger, salt. Cook until potatoes are tender',
'Fry cumin, red chili powder. Add beans, garlic, tomatoes, salt. Cook until beans are tender',
'Fry mustard seeds, turmeric. Add cauliflower, coconut milk, curry leaves, salt. Cook until cauliflower is tender',
'Boil tamarind, dates, ginger, jaggery with water. Blend until smooth. Season with red chili powder',
'Fry paneer until golden. Add fenugreek leaves, peas, tomatoes, cream, salt. Cook until tomatoes are soft',
'Fry saffron in ghee. Add rice, water, cilantro, garlic, salt. Cook until rice is fluffy',
'Fry bay leaf, black cardamom in ghee. Add lamb, cinnamon, yogurt, salt. Simmer until lamb is tender',
'Fry fennel seeds, nigella seeds in oil. Add potatoes, turmeric, onions, salt. Cook until potatoes are tender',
'Blend poppy seeds, amchur powder, garlic. Marinate chicken with this paste, yogurt, salt. Grill or fry until chicken is cooked',
'Mix chickpea flour, ajwain, turmeric, green chilies, yogurt. Cook as pancakes on a griddle until golden',
'Mix chickpeas, chaat masala, onions, tomatoes, cilantro. Season with lemon juice, salt',
'Fry chicken until golden. Add kasuri methi, tomatoes, cream, ghee, salt. Simmer until chicken is cooked',
'Fry panch phoron in mustard oil. Add potatoes, turmeric, tomatoes, salt. Cook until potatoes are tender',
'Cook rice flour, coconut, jaggery in ghee. Shape into squares, garnish with cardamom',
'Cook milk, almonds, cashews, pistachios, saffron, sugar in ghee. Simmer until thickened',
'Fry black pepper in mustard oil. Add fish, garlic, yogurt, salt. Simmer until fish is cooked',
'Fry curry powder, onions. Add chickpeas, tomatoes, cilantro, salt. Cook until thickened',
'Mix yogurt, roasted cumin, grated carrots, garlic, mint, salt. Chill before serving',
'Spread chutney on bread. Layer with red chili powder, garlic, tomatoes. Grill and serve hot',
'Fry turmeric, coriander, green chilies in oil. Add chickpeas, onions, salt. Cook until chickpeas are tender',
'Fry ginger, garlic. Add lamb, tamarind paste, tomatoes, salt. Simmer until lamb is tender',
'Cook rice, milk, saffron, sugar until rice is tender. Stir in yogurt. Chill before serving'];

loadSavedFavorites();

console.log(listOfIngredients);
if(clearBtn){
clearBtn.addEventListener('click', function () {
    location.reload();
});
}

listOfIngredients.forEach(ingredient=>{
    ingredient.addEventListener('click', selectionFunc);
});

if(checkBtn){
checkBtn.addEventListener('click', checkForRecipies);
}

function selectionFunc() {
        this.style.backgroundColor='rgba(0,0,0,0.5)';
        this.removeEventListener('click', selectionFunc);
        selectedArray.push(this.innerHTML);
        let newSpan=document.createElement('span');
        newSpan.innerHTML=this.innerHTML;
        selectedIngredients.appendChild(newSpan);
}

function checkForRecipies () {
    console.log(selectedArray);
    ingredients.forEach((i,index)=>{
        let newArray=i.split(" ");
        // console.log(newArray);
        selectedArray.forEach((sa,saIndex)=>{
            for(let j=0;j<newArray.length;j++){
                if(sa==newArray[j]){
                        console.log(newArray);
                        console.log(recipies[index]);
                        let newDiv=document.createElement('div');
                        newDiv.classList.add('details-of-recipies');
                        content.appendChild(newDiv);
                        let name=document.createElement('div');
                        name.innerHTML=`NAME : ${recipies[index]}`;
                        name.classList.add('details');
                        let ingredientsOfRecipie=document.createElement('div');
                        ingredientsOfRecipie.innerHTML=`INGREDIENTS : ${i}`;
                        ingredientsOfRecipie.classList.add('details');
                        let procedure=document.createElement('div');
                        procedure.innerHTML='PROCEDURE';
                        procedure.classList.add('procedure');
                        let save=document.createElement('div');
                        save.innerHTML='SAVE';
                        save.classList.add('procedure');
                        let up=document.createElement('div');
                        let down=document.createElement('div');
                        up.classList.add('up');
                        down.classList.add('down');
                        newDiv.appendChild(up);
                        newDiv.appendChild(down);
                        up.appendChild(name);
                        up.appendChild(ingredientsOfRecipie);
                        up.appendChild(procedure);
                        up.appendChild(save);
                        procedure.addEventListener('click', function () {
                            let proDetails=document.createElement('div');
                            proDetails.innerHTML=procedureArray[index];
                            down.appendChild(proDetails);
                        });
                        save.addEventListener('click',function () {
                            savedArray.push(recipies[index]);
                            savedArrayIngredients.push(ingredients[index]);
                            savedProcedure.push(procedureArray[index]);
                            console.log(savedArray);
                            console.log(savedArrayIngredients);
                            savingFavorites();
                        });
                }
                else{
                    continue;
                }
            }
        });
    });
}

function savingFavorites () {
    let savedString=JSON.stringify(savedArray);
    localStorage.setItem('savedArray', savedString);
    let savedIngredientsString=JSON.stringify(savedArrayIngredients);
    localStorage.setItem('savedIngredients', savedIngredientsString);
    let savedProcedureString=JSON.stringify(savedProcedure);
    localStorage.setItem('savedprocedure', savedProcedureString);
}
function loadSavedFavorites () {
    let savedFavString=localStorage.getItem('savedArray');
    let favArray=JSON.parse(savedFavString);
    savedArray=favArray;
    console.log(favArray);
    let favIngredients=localStorage.getItem('savedIngredients');
    let ingArray=JSON.parse(favIngredients);
    savedArrayIngredients=ingArray;
    console.log(ingArray);
    let proArrayString=localStorage.getItem('savedprocedure');
    let proArray=JSON.parse(proArrayString);
    savedProcedure=proArray;
}