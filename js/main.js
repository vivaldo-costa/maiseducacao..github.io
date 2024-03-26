$(document).ready(()=>{
    $('.navbar-show-btn').click(() =>{
        $('.navbar-collpase').addClass('showNavbar');
    });

    $('.btn-hide-btn').click(()=>{
        $('.navbar-collpase').removeClass('showNavbar');
    });

})