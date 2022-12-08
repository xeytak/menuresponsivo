

function showmenu(){
    let MenuMobile = document.querySelector('.mobile-menu');
   
    if(MenuMobile.classList.contains('open')){
        MenuMobile.classList.remove('open');
        document.querySelector('.icon').src = 'assets/img/menu_white_36dp.svg'
    } else{
        MenuMobile.classList.add('open');
        document.querySelector('.icon').src = 'assets/img/close_white_36dp.svg'
    }
}

