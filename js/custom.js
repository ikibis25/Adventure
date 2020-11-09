/*
Project: Adventure
-------------------------------------------------------------------*/
(function($) {
	"use strict";
	var Adventure = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function() {
			if (!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}
			/*-------------- Adventure Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.home_slider();
			this.selectpicker();
			this.datepicker();
			this.logo_crousel();
			this.Testimonial_crousel();
			this.Responsive_menu();
			this.Dropdown_Menu();
			this.animation();
			this.MailFunction();
		},
		/*-------------- Adventure Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function() {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if (rtl_attr) {
				$('html').find('body').addClass("rtl");
			}
		},
		//home slider
		home_slider: function() {
			if($(".home_slider").length > 0){
				$('.home_slider').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					touchDrag:true,
					mouseDrag:true,
					autoplay:true,
					autoplayTimeout:4000,
					autoplaySpeed:1000,
					Speed:1000,
					nav:true,
					navText:["<i class='fa fa-long-arrow-left' aria-hidden='true'></i>","<i class='fa fa-long-arrow-right' aria-hidden='true'></i>"],
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						}
					}
				})
			}
		},
		//selectpicker
		selectpicker: function() {
			$(".select_wrapper select").each(function(){
				$(this).after("<span class='select_holder'></span>");
			});
			$(".select_wrapper select").change(function(){
				var selectedOption = $(this).find(":selected").text();
				$(this).next(".select_holder").text(selectedOption);
			}).trigger('change');
		},
		//datepicker
		datepicker: function() {
			if($(".datepicker").length > 0){
				$(".datepicker").datepicker({
					dateFormat: "dd-mm-yy"
				});
			}
		},
		//logo crousel
		logo_crousel: function() {
			if($(".logo_crousel").length > 0){
				$('.logo_crousel').owlCarousel({
					loop:true,
					margin:15,
					items:5,
					autoplay:true,
					autoplayTimeout:1000,
					autoplaySpeed:1500,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:2
						},
						768:{
							items:3
						},
						1000:{
							items:5
						}
					}
				})
			}
		},
		//logo crousel
		Testimonial_crousel: function() {
			if($("#ad_testimonial").length > 0){
				$('#ad_testimonial').owlCarousel({
					loop:true,
					margin:0,
					items:1,
					autoplay:true,
					autoplayTimeout:1500,
					autoplaySpeed:1500,
					responsiveClass:true,
					responsive:{
						0:{
							items:1        
						},
						600:{
							items:1
						},
						768:{
							items:1
						}
					}
				})
			}
		},
		//Responsive Menu
		Responsive_menu: function() {
			$(".nav_toggle").on('click',function(){
				//$(".header_right_menu").slideToggle(500);
				$(this).toggleClass("toggle_open");
				$(".header_right_menu").toggleClass("menu_open");
			});
		},
		//dropdown menu
		Dropdown_Menu: function (){
			if ($(window).width () < 991){
			$(".header_right_menu ul li ul.sub-menu").parents("li").addClass("dropdown_toggle");
			$(".dropdown_toggle").append("<span class='caret_down fa fa-caret-down'></span>");
			$(".header_right_menu ul li").children(".caret_down").on("click",function(){
				$(this).toggleClass("caret_up fa-caret-up")
				//$('.header_right_menu ul li .caret_down').not(this).parents("li").children("ul").slideUp();
				$(this).prev("ul").slideToggle();
			});
			}
			else {
				
			}
		},
		//animation on scroll
		animation:function() {
			var wow = new WOW({
				boxClass:     'wow',      // default
				animateClass: 'animated', // default
				offset:       0,          // default
				mobile:       true,       // default
				live:         true        // default
			})
			wow.init();
		},
		MailFunction:function(){
			//help mail function	
			$('.submit_frm').on('click', function(){
				var u_name=$('#name').val();
				var u_email=$('#email').val();
				var u_phone=$('#number').val();
				var u_msg=$('#message').val();
				
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':u_name,
						'useremail':u_email,
						'userphone':u_phone,
						'user_msg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#name').val("");
							$('#email').val("");
							$('#number').val("");
							$('#message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#name').val(u_name);
							$('#email').val(u_email);
							$('#number').val(u_phone);
							$('#message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
   };
   
	Adventure.init();
	//window load function
	$(window).load(function(){
		$(".preloader").fadeOut("slow").delay("600");
	});
	//window scroll
	$(window).bind("scroll", function(){
		if ($(this).scrollTop() > 100) {
			$(".ad_header_section").addClass("fixed_menu");
		}
		else{
			$(".ad_header_section").removeClass("fixed_menu");
		}
	})
})(jQuery);