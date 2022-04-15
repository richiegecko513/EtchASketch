const sketchBox = document.querySelector('.container');
const clear = document.querySelector('.erase');
const sizes = document.querySelectorAll('.size');
const rainbowColor = document.querySelector('#rainbow');
const defaultButton = document.querySelector('#default');

let gridSize 

function makeGrid(gridSize = 16){
for (i=0; i<gridSize*gridSize; i++){
    const box = document.createElement('div')
    box.className = 'box';
    const gridStyle = `width:${(1/gridSize)*100}%; height: ${(1/gridSize)*100}%; border: 1px solid #E5E4E2;`
    box.setAttribute('style',gridStyle)
    sketchBox.appendChild(box)
 }
 colour()
}
makeGrid()

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


function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function erase(){
  while(sketchBox.firstChild){
    sketchBox.removeChild(sketchBox.firstChild)
  }
  makeGrid(gridSize)
}

clear.addEventListener('click', erase)


function colour(){
let pixels=document.getElementsByClassName("box");
for (let i=0;i<pixels.length;i++){
  {
    pixels[i].addEventListener("mouseover",function(){pixels[i].style.backgroundColor = pickColor()})
  }
}
}

function pickRGB(){
  pickcolor = "rgb";
}

function pickRainbow(){
  pickcolor = "rainbow"
}

function pickColor(){
  if(pickcolor == "rgb") {
    let rgb = document.querySelector('#colorchanger')
    return rgb.value;
  }
  if(pickcolor == "rainbow"){
    return generateRandomColor()
  }
}

let pickcolor = "rgb"
colour()
changeSize()
