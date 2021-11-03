const groups = document.querySelectorAll('.ingredientsGroups');
let leftBar = document.querySelector('.left');
const arrForBread = ['imgs/burgher_white.png', '10 lei', 'imgs/burgher_white.png', '20 lei'];
const arrForMeat = ['imgs/burger_meat.png', '10 lei', 'imgs/burger_meat.png', '20 lei', 'imgs/burger_meat.png', '10 lei', 'imgs/burger_meat.png', '30 lei'];
const arrForVegetables = ['imgs/tomato_slice.png', '10 lei', 'imgs/tomato_slice.png', '20 lei'];
const arrForCheese = ['imgs/cheese_slice.png', '10 lei', 'imgs/cheese_slice.png', '20 lei', 'imgs/cheese_slice.png', '10 lei', 'imgs/cheese_slice.png', '30 lei'];
const arrForSauce = ['imgs/sauce.png', '10 lei', 'imgs/sauce.png', '30 lei']

let finalPrice;

groups.forEach(elem => {
  elem.addEventListener('click', (ev) => {
    if(ev.target.parentElement.className === 'liBread') {
      insertGroup(arrForBread);
      console.log(`bread`);
      // functia pentru a inserta in div.left painea si a inserta in ul din right pozitia adugata si a adauga la pret final
    };
    if(ev.target.parentElement.className === 'liMeat') {
      insertGroup(arrForMeat);
      console.log(`meat`);
      // functia pentru a inserta in div.left pirjoala si a inserta in ul din right pozitia adugata si a adauga la pret final
    };
    if(ev.target.parentElement.className === 'liVegetables') {
      insertGroup(arrForVegetables);
      console.log(`vegetables`);
      // functia pentru a inserta in div.left legumele si a inserta in ul din right pozitia adugata si a adauga la pret final
    };
    if(ev.target.parentElement.className === 'liCheese') {
      insertGroup(arrForCheese);
      console.log(`cheese`);
      // functia pentru a inserta in div.left cascavalul si a inserta in ul din right pozitia adugata si a adauga la pret final
    };
    if(ev.target.parentElement.className === 'liSauce') {
      insertGroup(arrForSauce);
      console.log(`sauce`);
      // functia pentru a inserta in div.left sousul si a inserta in ul din right pozitia adugata si a adauga la pret final
    };
  })
})

let insertGroup = (arr) => {
  let breadUl = document.createElement('ul');
  leftBar.innerHTML = '';
  for (let i = 0; i < arr.length; i += 2) {
    let li = document.createElement('li');
    let imgLi = document.createElement('img');
    imgLi.setAttribute('src', arr[i]);
    li.appendChild(imgLi);
    let textLi = document.createElement('span') 
    textLi.textContent = arr[i+1];
    li.appendChild(textLi);
    breadUl.appendChild(li);
    let buttonLi = document.createElement('button');
    let imgButton = document.createElement('img');
    imgButton.setAttribute('src', 'imgs/green_plus.png');
    buttonLi.appendChild(imgButton);
    li.appendChild(buttonLi);
  };
  leftBar.appendChild(breadUl)
}

