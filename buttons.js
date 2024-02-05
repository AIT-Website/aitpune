let box = document.querySelector('.jd_table');
function change_view(){
    box = document.querySelector('.jd_table');
    if(box.style.visibility == 'visible'){
        hide(); 
    }
    else{
        show();
    }
}

function show(){
    box = document.querySelector('.jd_table');
    obj = document.querySelector('#box_hide');
    box.style.visibility = 'visible';
    obj.style.background = '#fff';
    obj.style.borderColor = 'red';
    obj.style.color = 'red';
    obj.innerHTML = 'Close';
    obj.style.bottom = '70%';
}

function hide(){
    box = document.querySelector('.jd_table');
    obj = document.querySelector('#box_hide');
    box.style.visibility = 'hidden';
    obj.style.background = '#0C2695';
    obj.style.borderColor = '#fff';
    obj.style.color = '#fff';
    obj.innerHTML = 'Menu'; 
    obj.style.bottom = '5rem';   
}

function handleResize() {
    if (window.innerWidth < 800) {
        hide();
    } else {
        show();
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleResize);
handleResize();

document.addEventListener('click', function(event) {
    var isClickInsideBox = document.querySelector('.jd_table').contains(event.target);
    var isClickInsidetar = document.querySelector('#box_hide').contains(event.target);
    if (!isClickInsideBox && !isClickInsidetar) {
        if(window.innerWidth < 800 ) hide();
    }
});
