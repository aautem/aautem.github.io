(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({scrollOffset: 55});

    var options = [
      {selector: '.full-stack', offset: 0, callback: function(el) {
        setTimeout(function() {
          Materialize.showStaggeredList($(el));
        }, 250);
      } },
      {selector: '.personal', offset: 0, callback: function(el) {
        setTimeout(function() {
          Materialize.showStaggeredList($(el));
        }, 500);
      } },
      {selector: '#savvyshopper-list', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#savvyshopper-pic', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#sandpiper-list', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#sandpiper-pic', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#metis-list', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#metis-pic', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#bracketbuilder-list', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#bracketbuilder-pic', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#hangman-list', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#hangman-pic', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#viewtube-list', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#viewtube-pic', offset: 200, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '.resume-links', offset: 150, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
    ];

    Materialize.scrollFire(options);

  }); // end of document ready
})(jQuery); // end of jQuery name space