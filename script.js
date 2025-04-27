function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
}

function displayCurrentYear(){
    let now = new Date();
    let currentYear = now.getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

window.onload = displayCurrentYear;

document.getElementById('intro').addEventListener(
    ('click'),
    () => changeBackgroundColor('#2ca02c')
);

document.getElementById(
    ('click'),
    () => changeBackgroundColor('#FF7F0E')
);

document.getElementById(
    ('click'),
    () => changeBackgroundColor('#9467BD')
);

