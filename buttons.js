let len = 800;

function change_view(){
    let box = document.querySelector('.jd_table');
    if(box.style.visibility == 'visible' && window.innerHeight<800){
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
    obj.style.bottom = '22.5rem';
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
    console.log('roman')
}

if(window.innerWidth < len) hide();

if(window.innerWidth < 800){
    window.addEventListener('scroll', function() {
        hide();
    });
    window.addEventListener('resize', function() {
        hide();
    });
}


