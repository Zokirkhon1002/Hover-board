let container = document.getElementById("container"),
    colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#dbe914', '#1418e9', '#ffffff'],
    SQUARES = 400;

for(let i=0; i<SQUARES; i++){
    let each_square = document.createElement('div');
        each_square.classList.add('square')
        each_square.addEventListener('mouseover', () => setColor(each_square))
        each_square.addEventListener('mouseout', () => removeColor(each_square))
        container.appendChild(each_square)
}

function setColor(el){
    const color = getRandomColor();
    console.log(color)
    el.style.background = color;
    el.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
}

function removeColor(el){
    el.style.background = '#747474';
    el.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
