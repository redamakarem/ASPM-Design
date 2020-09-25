let mobileMainMenuOpen = false;
      let mobileSubMenuOpen = false;
      function myMap() {
        var uluru = { lat: 29.357879, lng: 47.953008 };
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: uluru,
        });
        var marker = new google.maps.Marker({ position: uluru, map: map });
      }
      jQuery(document).ready(function () {
        if(jQuery('html')[0].lang ==='en'){
            jQuery(".swiper-wrapper").slick({
                autplay: true,
                autoplaySpeed: 3000,
                prevArrow: "",
                nextArrow: "",
                dots: true,
              });
        }else if(jQuery('html')[0].lang ==='ar'){
            jQuery(".swiper-wrapper").slick({
                autplay: true,
                autoplaySpeed: 3000,
                prevArrow: "",
                nextArrow: "",
                rtl:true,
                dots: true,
              });
        }
        
        jQuery("header.mobile .nav-container").hide();
        AOS.init();

        // menu button
        jQuery(".menu-btn").click(function () {
          if(jQuery('header.mobile .nav-container').is(':visible')){
            jQuery('header.mobile .nav-container').slideUp();
            jQuery(this).removeClass('open');
          }
          else{
            jQuery('header.mobile .nav-container').slideDown();
            jQuery(this).addClass('open');
          }
        });
        jQuery(".parallax-window").enllax();
        jQuery("header.desktop .nav-item.dropdown").hover(
          function () {
              jQuery(this).find(".dropdown-content").show();
            // jQuery("header.desktop .dropdown-content").show();
          },
          function () {
            jQuery(this).find(".dropdown-content").hide();
            // jQuery("header.desktop .dropdown-content").hide();
          }
        );
        jQuery("header.mobile .nav-item.dropdown span.mobile-menu-dropdown").click(function(){
          console.log(jQuery(this.closest('.nav-item.dropdown')).find('.dropdown-content'));

          if(jQuery(this.closest('.nav-item.dropdown')).find('.dropdown-content').is(':visible')){
            jQuery(this).css("transform","rotate(0deg)");
            jQuery(this.closest('.nav-item.dropdown')).find('.dropdown-content').slideUp();
          }
          else{
            jQuery(this).css("transform","rotate(180deg)");
            jQuery(this.closest('.nav-item.dropdown')).find('.dropdown-content').slideDown();
          }
          
        });
      });