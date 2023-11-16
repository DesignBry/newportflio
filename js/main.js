$(function (){
    $('header li').click(function(e){
        e.preventDefault();
        $('header li a').removeClass('active')
        $(this).find('a').addClass('active')

        let idx = $(this).index()

        let section = $('main > section').eq(idx)
        let sectionTop = section.offset().top
        $('html, body').animate({
            scrollTop : sectionTop
        })
    })



    $(window).scroll(function(){
        let windowst = $(window).scrollTop()
        console.log(windowst)
        let section1oft = $('.sect1-main').offset().top
        // console.log(section1oft)
        if( windowst > section1oft ){
            $('header').animate({
                top : '15px'
            }, 300)
        // }else {
        //     $('header').animate({
        //         top : '-100px'
        //     }, 300)
        // }
        // if (windowst  <= 0) {
        //     $('header').animate({
        //         top : '-100px'
        //     })
        }

        $('section').each(function(){
            if($(this).offset().top <= $(window).scrollTop()) {
                let idx = $(this).index()
                $('header li a').removeClass('active')
                $('header li').eq(idx).find('a').addClass('active')
            }
        })

    })

    $('footer .inner button').click(function(e){
        e.preventDefault()
        let sectionoft = $('.sect3-profile').offset().top
        
        $('html, body').stop().animate({
            scrollTop : sectionoft
        }, 500)
    })

    $('.sect1-main .inner .scroll-down').click(function(){
        let section2oft = $('.sect2-aboutme').offset().top
        
        $('html, body').stop().animate({
            scrollTop : section2oft
        }, 300)
    })

})