const sketchBox = document.querySelector('.container')
let box;

for (i=0; i<256; i++){
    box = document.createElement('div')
    box.className = 'box';
    box.setAttribute('style','border:1px solid #E5E4E2;')
    sketchBox.appendChild(box)
}


