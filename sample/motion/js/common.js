$(function () {
  // 상단탭 클릭시 이동
  var $menu = $('.tnb li');
  var $contents = $('.section');
  var $doc = $('html, body');
  $menu.eq(0).addClass("active");
  $(function () { 
      $menu.on('click','a', function(){ 
          var $target = $(this).parent();
          var idx = $target.index();
          var section = $contents.eq(idx); 
          var offsetTop = section.offset().top;                    
          $doc.stop().animate({ scrollTop :offsetTop}, 800); 
          return false;
      }); 
  });
  // 상단탭 스크롤시 이동
  $(window).scroll(function(){ 
      var scltop = $(window).scrollTop(); 
      
      $.each($contents, function(idx, item){ 
          var $target = $contents.eq(idx);
          var i = $target.index();
          targetTop = $target.offset().top - 100; 
          if (targetTop <= scltop) { 
              $menu.removeClass('active'); 
              $menu.eq(idx).addClass('active');
              $menu.find("a").removeAttr("title");
              $menu.eq(idx).find("a").attr("title", "선택됨");
          } 
          else if (scltop == $(document).height() - $(window).height()) {//마지막콘텐츠의 높이가 짧을경우 탭 강제 활성화
              $menu.last().addClass("active").siblings().removeClass("active")
          }
      }) 
  });
  
  //스크롤시 고정 스티키로 변경
  // $(function() {
  //     var header = $(".tnb");
  //     $(window).scroll(function() {    
  //         var scroll = $(window).scrollTop();
  //         if (scroll >= 50) {
  //             header.addClass("fixed");
  //         } else {
  //             header.removeClass("fixed");
  //         }
  //     });
  // });

  // 스크롤시 에니메이션효과
  $(document).on("scroll", function() {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".section");
      for (var i = 0; i < tags.length; i++) {
          var tag = tags[i];

          if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
          } else {
            $(tag).removeClass("visible");
          }
      }
  });

  // 슬릭스와이퍼
  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,                           
    asNavFor: '.slider',
    arrows: false,
    focusOnSelect: true,
    focusOnChange: true,
    accessibility: true,
  });            
  $('.slider').slick({
    infinite: false,
    asNavFor: '.slider-nav',
    arrows: true,
    prevArrow: '<a href="#btn" class="thumb-slick-arrow thumb-slick-prev">이전슬라이드보기</a>',
    nextArrow: '<a href="#btn" class="thumb-slick-arrow thumb-slick-next">다음슬라이드보기</a>',
    focusOnSelect: true,
  });
  
  $('.slider-nav a').on('click', function(e) {
    e.preventDefault();
    $('.slider-nav .slick-slide a').removeClass('active').removeAttr('title');
    $(this).attr("title", "선택됨");
  });

});
