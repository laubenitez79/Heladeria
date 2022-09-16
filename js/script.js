let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});

var swiper = new Swiper(".reviews-slider", {
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    grabCursor:true,
    loop:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


$(document).ready(function(){
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    // FILTRANDO PRODUCTOS  ============================================
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
        // OCULTANDO PRODUCTOS =========================
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        } setTimeout(hideProduct,400);
        // MOSTRANDO PRODUCTOS =========================
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').show();
            $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
    });
    // MOSTRANDO TODOS LOS PRODUCTOS =======================
    $('.category_item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform', 'scale(1)');
        } setTimeout(showAll,400);
    });
});
