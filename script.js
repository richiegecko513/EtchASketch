const sketchBox = document.querySelector('.container');
const clear = document.querySelector('.erase');
const sizes = document.querySelectorAll('.size');

let gridSize = 16

for (i=0; i<gridSize**2; i++){
    const box = document.createElement('div')
    box.className = 'box';
    sketchBox.appendChild(box)
}
let divList = document.querySelectorAll('.box')

function erase(e) {
  divList.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}

clear.addEventListener('click', erase)

function color() {
  divList.forEach((div) => {
    div.onmouseover = function(e) {
      e.target.setAttribute('style','background-color:seagreen')
    }
    
  })
}

color()