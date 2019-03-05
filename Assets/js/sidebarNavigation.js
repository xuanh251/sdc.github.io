$(document).ready(function(){
    // var fixHeight = function(){
    //   $(".navbar-nav").css("max-height",document.documentElement.clientHeight -150);
    // }
    // fixHeight();
    // $(window).resize(function(){
    //  fixHeight();
    // });
    // $(".navbar .navbar-toggler").on("click",function(){
    //   fixHeight();
    // });
    $(".btn-nav-onleft").on("click",function(){
      $(".mobileMenuLeft").toggleClass("open");
      $('.mobileMenuLeft').toggleClass("fixHeight");
    });
    $(".btn-nav-onright").on("click",function(){
      $(".mobileMenuRight").toggleClass("open");
      $('.mobileMenuRight').toggleClass("initHeight");
      $('.mobileMenuRight').toggleClass("undisplay");
    });
  });