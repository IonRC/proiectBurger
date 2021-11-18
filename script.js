const groupsOfIngredients = document.querySelectorAll('.variation-list');
let leftBar = document.querySelector('.left');

const objForBread = [{img: 'imgs/burgher_white.png', img1: 'imgs/breadWhiteTop.png', img2: 'imgs/breadWhiteBot.png', name: 'paine1', price: 10}, {img: 'imgs/burgher_white.png', name: 'paine2', price: 20}];
const objForMeat = [{img: 'imgs/burger_meat.png', name: 'parjoala1', price: 20}, {img: 'imgs/burger_meat.png', name: 'parjoala2', price: 30}, {img: 'imgs/burger_meat.png', name: 'parjoala3', price: 40}];
const objForVegetables = [{img: 'imgs/tomato_slice.png', name: 'legume1', price: 10}, {img: 'imgs/tomato_slice.png', name: 'legume2', price: 20}];
const objForCheese = [{img: 'imgs/cheese_slice.png', name: 'cascaval1', price: 20}, {img: 'imgs/cheese_slice.png', name: 'cascaval2', price: 30}, {img: 'imgs/cheese_slice.png', name: 'cascaval3', price: 40}];
const objForSauce = [{img: 'imgs/sauce.png', name: 'sous1', price: 10}, {img: 'imgs/sauce.png', name: 'sous2', price: 20}];

groupsOfIngredients.forEach(elem => {
  elem.addEventListener('click', (ev) => {
    // bread
    if(ev.target.parentElement.className === 'liBread') {
      insertLeftGroup(objForBread);
      let pickIngridientGroup = document.querySelectorAll('.left > ul > li');
      pickIngridientGroup.forEach(elem => {
        elem.addEventListener('click', (ev) => {
          objForBread.forEach(elem =>{
            if(elem.name === ev.currentTarget.classList.value) {
            //  aici va merge codul pentru a crea contentul in dependenta care element din lista a fost ales
            }
          })
        })
      })
    };
    // meat
    if(ev.target.parentElement.className === 'liMeat') {
      insertLeftGroup(objForMeat);
      let pickIngridientGroup = document.querySelectorAll('.left > ul > li');
      pickIngridientGroup.forEach(elem => {
        elem.addEventListener('click', (ev) => {
          objForMeat.forEach(elem =>{
            if(elem.name === ev.currentTarget.classList.value) {
              //  aici va merge codul pentru a crea contentul in dependenta care element din lista a fost ales
            }
          })
        })
      })
    };
    // vegetables
    if(ev.target.parentElement.className === 'liVegetables') {
      insertLeftGroup(objForVegetables);
      let pickIngridientGroup = document.querySelectorAll('.left > ul > li');
      pickIngridientGroup.forEach(elem => {
        elem.addEventListener('click', (ev) => {
          objForVegetables.forEach(elem =>{
            if(elem.name === ev.currentTarget.classList.value) {
            //  aici va merge codul pentru a crea contentul in dependenta care element din lista a fost ales              
            }
          })
        })
      })
    };
    // cheese
    if(ev.target.parentElement.className === 'liCheese') {
      insertLeftGroup(objForCheese);
      let pickIngridientGroup = document.querySelectorAll('.left > ul > li');
      pickIngridientGroup.forEach(elem => {
        elem.addEventListener('click', (ev) => {
          objForCheese.forEach(elem =>{
            if(elem.name === ev.currentTarget.classList.value) {
            //  aici va merge codul pentru a crea contentul in dependenta care element din lista a fost ales
            }
          })
        })
      })
    };
    // sauce
    if(ev.target.parentElement.className === 'liSauce') {
      insertLeftGroup(objForSauce);
      let pickIngridientGroup = document.querySelectorAll('.left > ul > li');
      pickIngridientGroup.forEach(elem => {
        elem.addEventListener('click', (ev) => {
          objForSauce.forEach(elem =>{
            if(elem.name === ev.currentTarget.classList.value) {
            //  aici va merge codul pentru a crea contentul in dependenta care element din lista a fost ales  
            }
          })
        })
      })
    };
  })
})

let insertLeftGroup = (intel) => {
  let leftList = document.querySelector('.ingredients-list')
  leftList.innerHTML = '';
  for (let i = 0; i < intel.length; i ++) {
    let li = document.createElement('li');
      li.classList.add(intel[i].name)
      let imgLi = document.createElement('img');
      imgLi.setAttribute('src', intel[i].img);
      li.appendChild(imgLi);
        
      let textLi = document.createElement('span') 
      textLi.textContent = `${intel[i].name}; ${intel[i].price} lei`;
      li.appendChild(textLi);
      leftList.appendChild(li);

      let buttonLi = document.createElement('button');
      let imgButton = document.createElement('img');
      imgButton.setAttribute('src', 'imgs/green_plus.png');
      buttonLi.appendChild(imgButton);
      li.appendChild(buttonLi);
  };
  leftBar.appendChild(leftList);
}

