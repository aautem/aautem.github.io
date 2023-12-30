(function ($) {
  $(function () {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
    $(".scrollspy").scrollSpy({ scrollOffset: 55 });

    var options = [
      {
        selector: ".full-stack",
        offset: 0,
        callback: function (el) {
          setTimeout(function () {
            Materialize.showStaggeredList($(el));
          }, 250);
        },
      },
      {
        selector: ".personal",
        offset: 0,
        callback: function (el) {
          setTimeout(function () {
            Materialize.showStaggeredList($(el));
          }, 500);
        },
      },
      {
        selector: "#connect-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#connect-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));

          let index = 0;
          const link = $("#connect-image-link");
          const image = $("#connect-image-link img");
          const imgSrcs = [
            "images/connect-2.png",
            "images/connect-3.png",
            "images/connect-1.png",
          ];

          // Loop through images
          setInterval(() => {
            const src = imgSrcs[index];
            link.attr("href", `/${src}`);
            image.attr("src", src);
            index = index === 2 ? 0 : index + 1;
          }, 3500);
        },
      },
      {
        selector: "#wog-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#wog-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));

          let index = 0;
          const link = $("#wog-image-link");
          const image = $("#wog-image-link img");
          const imgSrcs = [
            "images/wog-2.png",
            "images/wog-3.png",
            "images/wog-1.png",
          ];

          // Loop through images
          setInterval(() => {
            const src = imgSrcs[index];
            link.attr("href", `/${src}`);
            image.attr("src", src);
            index = index === 2 ? 0 : index + 1;
          }, 3500);
        },
      },
      {
        selector: "#ctb-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#ctb-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        },
      },
      {
        selector: "#cointrail-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#cointrail-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        },
      },
      {
        selector: "#savvyshopper-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#savvyshopper-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        },
      },
      {
        selector: "#bowleriq-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#bowleriq-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        },
      },
      {
        selector: "#hangman-list",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
      {
        selector: "#hangman-pic",
        offset: 200,
        callback: function (el) {
          Materialize.fadeInImage($(el));
        },
      },
      {
        selector: ".resume-links",
        offset: 150,
        callback: function (el) {
          Materialize.showStaggeredList($(el));
        },
      },
    ];

    Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space
