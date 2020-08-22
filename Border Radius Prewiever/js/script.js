let box = document.querySelector('.box')

let iWidth = document.querySelector('#i-width');
let iRadius = document.querySelector('#i-radius');
let iColor = document.querySelector('#i-color');


function width() {
    box.style.borderWidth = iWidth.value + 'px'
}

function radius() {
    box.style.borderRadius = iRadius.value + '%'
}

function color() {
    box.style.borderColor = iColor.value
}

iWidth.addEventListener('keyup', width)
iWidth.addEventListener('click', width)
iRadius.addEventListener('keyup', radius)
iRadius.addEventListener('click', radius)
iColor.addEventListener('change', color)
