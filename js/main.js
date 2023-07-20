/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.salActive ----------(Sal animation for card and all text)
3.navtop -------(header class fixd in top)
3.wowActive ----------( Waw js plugins activation)
4.slicSlider -----------(All slider in this website hear)
5.Back to top -------(back to top)

6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
  "use strict";

  var imJs = {
    m: function (e) {
      imJs.d();
      imJs.methods();
    },
    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      imJs.counterUp();
      imJs.scrollTop();
      imJs.navTop();
      imJs.salActive();
      imJs.slickSlaider();
    },
    // counter up
    counterUp: function (e) {
      $(".counter").counterUp({
        delay: 10,
        time: 3000,
      });
      $(".counter").addClass("animated fadeInDownBig");
      $("h3").addClass("animated fadeIn");
    },

    salActive: function () {
      sal({
        threshold: 0.1,
        once: true,
      });
    },

    navTop: function () {
      let top = () => {
        let header = document.querySelector("header");
        let possition = document.documentElement.scrollTop;

        if (possition > 150) {

          //   fixed navber
          header.classList.add("menu_fixd");
          //   fixed navber
        } else {
          header.classList.remove("menu_fixd");
        }
      };
      $(window).scroll(top);
      $(window).load(top);
    },

    slickSlaider: function () {
      $(document).ready(function () {

        $(".slaider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          prevArrow:
            '<button class="slick_prev" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
          nextArrow:
            '<button class="slick_next" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',
        });

        $(".blog_slaider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          prevArrow:
            '<button class="slick_prev" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>',
          nextArrow:
            '<button class="slick_next" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>',
        });
        $(".brand_slaider").slick({
          slidesToShow: 5,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          prevArrow: false,
          nextArrow: false
        });

      });
    },

    scrollTop: function (d) {
      let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
          scrollProgress.style.display = "grid";
        } else {
          scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#dd5903 ${scrollValue}%, #ffffff ${scrollValue}%)`;
      };

      $(window).scroll(calcScrollValue);
      $(window).load(calcScrollValue);
    },
  };

  imJs.m();
})(jQuery, window);
