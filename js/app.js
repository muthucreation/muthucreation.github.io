$(document).ready(function() {
 
	// carousel 
	
	$("#area-of-expertise").owlCarousel({
 		//autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		navigation:true,
		pagination:false,
		responsive:true
	}); 
			
	$("#work-1").click(function(){
		$("body").addClass("modal-open");
	});
			
			$(".open-popup").click(function(){	
				$(".header").css("display","none");
			});
			
			$(".close-modal").click(function(){
				$("body").removeClass("modal-open");
			});
			$(document).on('keyup',function(evt){
				if ((evt.keyCode == 27) && ($("body").hasClass("modal-open"))){
				$("body").removeClass("modal-open");
				}
			});
			
			 $('a[href^="#"]').on('click', function(event) {
                var target = $($(this).attr('href') );
                if(target.length){
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }

            });
			
			$(".nav-btn").click(function(){
				$(".menu").slideToggle();
			});
			
			
		});
		
		$(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var screen_width = $(window).width();

        if(screen_width >= 768)
        {
        if(scroll > 400)
        {
            $(".header").addClass("is-sticky");
        }
        else
        {
            $(".header").removeClass("is-sticky")
        }
        }
        });