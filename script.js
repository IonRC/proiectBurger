const groupsOfIngredients = document.querySelectorAll('.ingredientsGroups');
let leftBar = document.querySelector('.left');
let rightList = document.querySelector('.rightList');
let middleUl = document.querySelector('.imgConstructor');

const objForBread = [{img: 'imgs/burgher_white.png', img1: 'imgs/breadWhiteTop.png', img2: 'imgs/breadWhiteBot.png', name: 'paine1', price: 10}, {img: 'imgs/burgher_white.png', name: 'paine2', price: 20}];
const objForMeat = [{img: 'imgs/burger_meat.png', name: 'parjoala1', price: 20}, {img: 'imgs/burger_meat.png', name: 'parjoala2', price: 30}, {img: 'imgs/burger_meat.png', name: 'parjoala3', price: 40}];
const objForVegetables = [{img: 'imgs/tomato_slice.png', name: 'legume1', price: 10}, {img: 'imgs/tomato_slice.png', name: 'legume2', price: 20}];
const objForCheese = [{img: 'imgs/cheese_slice.png', name: 'cascaval1', price: 20}, {img: 'imgs/cheese_slice.png', name: 'cascaval2', price: 30}, {img: 'imgs/cheese_slice.png', name: 'cascaval3', price: 40}];
const objForSauce = [{img: 'imgs/sauce.png', name: 'sous1', price: 10}, {img: 'imgs/sauce.png', name: 'sous2', price: 20}];


let finalPrice = 0;
let finalPriceHtml = document.querySelector('.priceToPay')

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
              insertRightGroup(elem);
              let middleLiTop = document.createElement('li');
              let middleImgTop = document.createElement('img');
              middleImgTop.setAttribute('src', elem.img1);
              middleLiTop.appendChild(middleImgTop)

              let middleLiBot = document.createElement('li');
              let middleImgBot = document.createElement('img');
              middleImgBot.setAttribute('src', elem.img2);
              middleLiBot.appendChild(middleImgBot);

              middleUl.append(middleLiTop, middleLiBot);
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
              insertRightGroup(elem);
              insertMiddleGroup(elem);
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
              insertRightGroup(elem);
              insertMiddleGroup(elem);
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
              insertRightGroup(elem);
              insertMiddleGroup(elem);
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
              insertRightGroup(elem);
              insertMiddleGroup(elem);
            }
          })
        })
      })
    };
  })
})

let insertLeftGroup = (intel) => {
  let breadUl = document.createElement('ul');
  leftBar.innerHTML = '';
  for (let i = 0; i < intel.length; i ++) {
    let li = document.createElement('li');
      li.classList.add(intel[i].name)
      let imgLi = document.createElement('img');
      imgLi.setAttribute('src', intel[i].img);
      li.appendChild(imgLi);
        
      let textLi = document.createElement('span') 
      textLi.textContent = `${intel[i].name}; ${intel[i].price} lei`;
      li.appendChild(textLi);
      breadUl.appendChild(li);

      let buttonLi = document.createElement('button');
      let imgButton = document.createElement('img');
      imgButton.setAttribute('src', 'imgs/green_plus.png');
      buttonLi.appendChild(imgButton);
      li.appendChild(buttonLi);
  };
  // let hThree = document.createElement('h3');
  // hThree.textContent = 'Ингредиенты:';
  // leftBar.appendChild(hThree);
  leftBar.appendChild(breadUl);
}

let insertMiddleGroup = (intel) => {
  let middleLi = document.createElement('li');
  let middleImg = document.createElement('img');
  middleImg.setAttribute('src', intel.img);
  middleLi.appendChild(middleImg);
  middleUl.insertBefore(middleLi, middleUl.firstElementChild.nextSibling);
}

let insertRightGroup = (intel) => {
  let rightLi = document.createElement('li');
  let nameLi =document.createElement('span')
  nameLi.textContent = `${intel.name}`;
  let priceLi = document.createElement('span');
  priceLi.textContent = `${intel.price} руб`;
  rightLi.append(nameLi, priceLi);
  rightList.appendChild(rightLi);
  finalPrice += intel.price;
  finalPriceHtml.textContent = `Итого: ${finalPrice} руб`
}


