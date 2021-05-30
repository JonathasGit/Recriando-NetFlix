$('.owl-carousel').owlCarousel({
    loop:true, /*Para fazer o loop sim ou não*/ 
    margin:10, /*Margem entre os filmes*/
    nav:false, /*Botão de navegação*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})