const sketchBox = document.querySelector('.container');
const clear = document.querySelector('.erase');
const sizes = document.querySelectorAll('.size');
const colorPicker = document.querySelector('#choice');
const rainbowColor = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser')

let gridSize 

function makeGrid(gridSize = 16){
for (i=0; i<gridSize*gridSize; i++){
    const box = document.createElement('div')
    box.className = 'box';
    const gridStyle = `width:${(1/gridSize)*100}%; height: ${(1/gridSize)*100}%; border: 1px solid #E5E4E2;`
    box.setAttribute('style',gridStyle)
    box.addEventListener('mouseover',color)
    sketchBox.appendChild(box)
}
}
makeGrid()
const divList = document.querySelectorAll('.box')

function changeSize(){
  sizes.forEach((button) =>{
    button.addEventListener('click',()=>{
      if(button.id == "sm"){
        gridSize = 8;
        while(sketchBox.firstChild){
          sketchBox.removeChild(sketchBox.firstChild)
        }
        makeGrid(gridSize);
      }else if(button.id == "med"){
        gridSize = 16;
        while(sketchBox.firstChild){
          sketchBox.removeChild(sketchBox.firstChild)
        }
        makeGrid(gridSize);
      }else if(button.id == "large"){
        gridSize = 36;
        while(sketchBox.firstChild){
          sketchBox.removeChild(sketchBox.firstChild)
        }
        makeGrid(gridSize);
      }
    })
  })
}

function erase() {
  divList.forEach((div) => {
    div.style.backgroundColor = "white";
  });
}
let randomColor =  "#" + ((1<<24)*Math.random() | 0).toString(16)
clear.addEventListener('click', erase)

function color(e) {
 e.target.style.backgroundColor = "seagreen"
}


changeSize()
