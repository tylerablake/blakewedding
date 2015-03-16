// ctrl alt f for js formatting

$(document).ready(function() {

  // Image gallery popups
  $('.general-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.engage-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // START SCROLLSPY
  // Cache selectors
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
  });
  // END SCROLLSPY

  $('.bxslider').bxSlider({
    mode: 'fade',
    auto: 'true'
  });

});

// Responsive navigation
var nav = responsiveNav(".nav-collapse", {
  animate: false,
  label: "",
  insert: "before",
});

// Countdown
$(function() {
  var austDay = new Date();
  austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  $('#defaultCountdown').countdown({
    until: new Date(2014, 9 - 1, 13)
  });
  $('#year').text(austDay.getFullYear());
});

// Team section hover captions
$(window).load(function() {
  $('.hcaption').hcaptions({
    effect: "fade"
  });
});