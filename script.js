$(document).ready(function(){
    $(window).scroll(function(){
        // Fixé la barre de menu lors du defilement 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // bouton de défilement afficher/masquer le script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // script coulissant
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // suppression du défilement fluide lors du clic sur le bouton coulissant
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // appliquer à nouveau un défilement fluide sur les éléments de menu, cliquez sur
        $('html').css("scrollBehavior", "smooth");
    });

    // Le menu et la barre de navigation
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Taper le texte d'animation
    var typed = new Typed(".test_0", {
        strings: ["Développeur FRONT-END", "Web Designer", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".test_1", {
        strings: ["Développeur FRONT-END", "Web Designer", ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Le slider
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

  
    