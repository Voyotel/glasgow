// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// require ("lightbox")
//= require jquery3
//= require popper
//= require bootstrap-sprockets

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// =====================================================
    //      NAVBAR
    // =====================================================
    var c, currentScrollTop = 0;
    $(window).on('scroll load', function () {

        if ($(window).scrollTop() >= 100) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }

        // Navbar functionality
        var a = $(window).scrollTop(), b = $('.navbar').height();

        currentScrollTop = a;
        if (c < currentScrollTop && a > b + b) {
            $('.navbar').addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
            $('.navbar').removeClass("scrollUp");
        }
        c = currentScrollTop;

    });


    // =====================================================
    //      PREVENTING URL UPDATE ON NAVIGATION LINK
    // =====================================================
    $('.link-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000);

        e.preventDefault();
    });


    // =====================================================
    //      SCROLL SPY
    // =====================================================
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    <!-- Start of Async Drift Code -->
<script>
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('im7ibu6u76mz');
</script>
<!-- End of Async Drift Code -->