(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    $(".nav-link").click((event)=>{
        const doc = event.target;
        console.log(event);
        $(".nav-link.active").removeClass('active');
        let classes = doc.classList;
        let str = "";
        for(let class1 of classes){
            console.log(class1);
            str += `.${class1}`;
        }
        $(str).addClass('active');
       
    })

    $("#sendMessageButton").click((event) => {
        let name = $("#name").val();
        let email = $("#email").val();
        let subject =$("#subject").val();
        let message =$("#message").val();

        console.log(name);
        console.log(email);
        console.log(subject);

        console.log(message);
        $.ajax({ 
            url: 'http://localhost:3200/send-email',
            type: 'POST',
            cache: false, 
            data: { name, email, subject, message }, 
            success: function(response){
               console.log(response);
               if(response.result === 'success'){


                    $("#EmailSent").css('display', "block");
                    // Helllo
               }
            }, 
            error: function(jqXHR, textStatus, err){
                alert('text status '+textStatus+', err '+err)
            }
         })
        event.preventDefault();
    })
    
})(jQuery);

