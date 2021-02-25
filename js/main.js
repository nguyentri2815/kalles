$(function() {
    // =====================================
    // Layouts/loadingPage
        $('#preload').delay(2000).fadeOut('fast');
    // =====================================
    //click icon show madal
    const showModal={
        init:function(){
            this.clickIcon()
            this.clickClose()
        },
        clickIcon:function(){
            var Icon =document.querySelectorAll('.icon-madal');
            var overlay =document.querySelector('.md-overlay');
            var body = document.getElementsByTagName("BODY")[0];
            Icon.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault();
                    var idModal= element.getAttribute("data-modal");
                    var modalshow=document.getElementById(idModal);
                    modalshow.classList.toggle('active');
                    overlay.classList.toggle('active');
                    body.classList.toggle('active');
                })
            });
        },
        clickClose:function(){
            var iconClose=document.querySelectorAll('.close-modal');
            var modal=document.querySelectorAll('.md-modal')
            var overlay =document.querySelector('.md-overlay')
            var body = document.getElementsByTagName("BODY")[0];
            iconClose.forEach(element => {
                element.addEventListener('click',function(){
                    for (let i = 0; i < modal.length; i++) {
                        modal[i].classList.remove('active');
                    }
                    overlay.classList.toggle('active');
                    body.classList.toggle('active');
                })
            });
        }
    }
    showModal.init()
    //minus plus quantity
    $('.add').click(function () {		
        var th = $(this).closest('.wrap').find('.count');    	
        th.val(+th.val() + 1);
      });
      $('.sub').click(function () {
        var th = $(this).closest('.wrap').find('.count');    	
              if (th.val() > 1) th.val(+th.val() - 1);
      });
    // =====================================
    //footer odcodion
    const clicktitle = {
        init:function(){
            this.clickTitle()
        },
        clickTitle:function(){
            var titlefooter=document.querySelectorAll('.footer__title');
            titlefooter.forEach(element => {
                element.addEventListener('click',function(){
                    this.nextElementSibling.classList.toggle('active');
                    this.children[1].classList.toggle('active');
                })
            });
        }
    }
    clicktitle.init()
    // =====================================
    //modal-mobile
    const modalMobile = {
        init:function(){
            this.clicktitle()
        },
        clicktitle:function(){
            var title=document.querySelectorAll('.modal-mobileMenu__title-item');
            title.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault();
                    for (let j = 0; j < title.length; j++) {
                        title[j].classList.remove('active');
                    }
                    this.classList.add('active');
                    var menuShow =this.getAttribute('data-menu');
                    var idShow=document.getElementById(menuShow);
                    var list=document.querySelectorAll('.modal-mobileMenu__list');
                    for (let i = 0; i < list.length; i++) {
                        list[i].classList.remove('active')
                    }
                    idShow.classList.add('active');   
                })
            });
        }
    }
    modalMobile.init()
    // =====================================
    //hover dots product
    const hoverDot={
        init:function(){
            this.showimg()
        },
        showimg:function(){
            var dots=document.querySelectorAll('.product-desc__shoose-link');
            dots.forEach(element => {
                element.addEventListener('mouseover',function(){
                    var linkImg=this.getAttribute('data-showimg');
                    var parentNode0=this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[0];
                    var parentNode1=this.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].children[0];
                    parentNode0.style.display='none';
                    parentNode1.setAttribute("src", linkImg);
                })
            });
        }
    }
    hoverDot.init()
    // =====================================
    //countdown
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let countDown = new Date("Sep 30, 2021 00:00:00").getTime(),
    x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            
            headline.innerText = "It's my birthday!";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
        }

    }, second)
    // =====================================
    //products/ tab
    // =====================================
    const titleTab={
        init:function(){
            this.clickTitle()
        },
        clickTitle:function(){
            var title=document.querySelectorAll('.products__tab-link');
            title.forEach(element => {
                element.addEventListener('click',function(e){
                    e.preventDefault()
                    var nameID=this.getAttribute('data-products');
                    var idShow=document.getElementById(nameID);
                    var productSlide=document.querySelectorAll('.products__slide');
                    var producttab=document.querySelectorAll('.products__tab-link');
                    for (let i = 0; i < productSlide.length; i++) {
                        productSlide[i].classList.remove('active');
                    }
                    for (let j = 0; j < producttab.length; j++) {
                        producttab[j].classList.remove('active');
                    }
                    idShow.classList.add('active');
                    this.classList.add('active');
                })
            });
        }
    }
    titleTab.init()
    // =====================================
    //hegth modal quick view
    // const heigt={
    //     init:function(){
    //         this.heighright()
    //     },
    //     heighright:function(){
    //         var heighLeft=document.querySelector('.modal-view__item');
    //     }
    // }
    // heigt.init()
    //scroll window
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.header-bot').classList.remove('active')
        document.querySelector('.back-to-top').classList.remove('active')
        
    } else {
        document.querySelector('.header-bot').classList.add('active')
        document.querySelector('.back-to-top').classList.add('active')
    }
    prevScrollpos = currentScrollPos;
    }
    //sub-menu slide
    $('.sub-menu__slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false, 
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
            },
            600:{
                items:1,
                nav:false,
                dots:false
            },
            1200:{
                items:1
            }
        }
    })
    //sub-menu slide
    $('.modal-view__lide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:true, 
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:1,
                nav:false,
                dots:true
            },
            1200:{
                items:1
            }
        }
    })
    // =====================================
    //banner
    var owl = $('.banner__slide');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    // =====================================
    //trending slide
    $('.trending__slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            425:{
                items:2,
                nav:false
            },
            767:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    // =====================================
    //products slide
    $('.products__slide').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            425:{
                items:2,
                nav:false
            },
            767:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    // =====================================
    //follow slide
    $('.follow__slide').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            425:{
                items:4,
                nav:false
            },
            767:{
                items:6,
                nav:true,
                loop:false
            }
        }
    })
});