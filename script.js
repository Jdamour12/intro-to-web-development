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

document.getElementById('react').addEventListener(
    ('click'),
    () => changeBackgroundColor('#ff7f0e')
);

document.getElementById('backend').addEventListener(
    ('click'),
    () => changeBackgroundColor('#9467bd')
);

