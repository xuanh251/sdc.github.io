var udn = {
  init: function () {
    udn.registerEvent();
    udn.checkResize();
  },
  registerEvent: function () {
    //show-hide left child menu
    $('.udn-sidebar-content li ul').hide();
    $(".udn-sidebar-content a.toggle").off('click').on('click', function () {
      $(this).next("ul").slideToggle();
      $(this).closest("li").toggleClass("li-active");
      $('a.toggle span').toggleClass('udn-childdropdown-active');
    });

    //swipe menu from left and right
    $(".btn-nav-onleft").on("click",function(){
      $(".mobileMenuLeft").toggleClass("open");
      $('.mobileMenuLeft').toggleClass("fixHeight");
    });
    $(".btn-nav-onright").on("click",function(){
      $(".mobileMenuRight").toggleClass("open");
      $('.mobileMenuRight').toggleClass("initHeight");
    });


    $(window).resize(function () {
      udn.checkResize();
    });

    //append data to select
    Date.prototype.getWeek = function () {
      var a = new Date(this.getFullYear(), 0, 1);
      return Math.ceil((((this - a) / 86400000) + a.getDay() + 1) / 7);
    }
    var today = new Date();
    var weekNumber = today.getWeek();
    $('#week-number').append($('<option>', {
      value: weekNumber,
      text: 'Tuần thứ ' + weekNumber + " (" + udn.formatDate(udn.getMonday(new Date())) + ")"
    }));
    $('#fromDaytoDay').text("Từ " + udn.formatDate(udn.getMonday(new Date())) + " đến " + udn.getSunday(udn.getMonday(new Date())));
  },

  checkResize: function () {
    if ($(window).width() <= 991) {
      $('#first-search-form').hide();
      $('#second-search-form').show();
    } else {
      $('#first-search-form').show();
      $('#second-search-form').hide();
    }
  },

  //get special day
  getMonday: function (date) {
    var day = date.getDay() || 7;
    if (day !== 1)
      date.setHours(-24 * (day - 1));
    return date;
  },
  getSunday: function (date) {
    date.setDate(date.getDate() + 6);
    var dd = '' + date.getDate();
    var mm = '' + (date.getMonth() + 1);
    var y = date.getFullYear();
    if (mm.length < 2) mm = '0' + mm;
    if (dd.length < 2) dd = '0' + dd;
    return [dd, mm, y].join('-');
  },
  formatDate: function (date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [day, month, year].join('-');
  }

}
udn.init();
