
      /*Pagination dynamic*/
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },

        /*Autoplay自動播放*/
        autoplay: {
          delay: 3000,
        },

      });

      /*回到上方按鈕*/
      $(document).ready(function () {
        $('.top a').click(function (e) { 
          e.preventDefault(); 
          $('html,body').animate(
          {scrollTop: 0},700);}
          );
      });

      /*top按鈕可以到一定高度在顯示*/
      function showBtnCondition() {
        if ($(this).scrollTop() > 600) {
          $('#gotop').fadeIn();
            } else {
             $('#gotop').fadeOut();
           }
         }
       $(window).scroll(showBtnCondition);


      /*選單收合 */
      $(document).ready(function () {
        $('.nav > li > a').click(function (e) { 
          e.preventDefault();

          $('a').removeClass('keep');
          $(this).addClass('keep');

          $(this).parent().siblings().find('ul').slideUp();
          $(this).parent().find('ul').slideToggle();
          $('.dropdown-item a').addClass('animate__animated animate__slideInDown'); 
        });
      });

      /*移到選單外自動收起選單 */
      $('.dropdown-item').mouseleave(function(){
        $(this).slideUp();
      }) 


  


     

