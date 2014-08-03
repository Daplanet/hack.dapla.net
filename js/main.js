requirejs.config({
    paths: {
	'jquery': 'jquery.min',
        'escapes': 'escapes.min'
    }, 
    shim: {
	'escapes': { deps: ['jquery']}
    }
});

var libs = [
    "jquery",
    "escapes"
];

require(libs, function($,escapes) {
  $(document).ready(function() {
    escapes('/screen.txt', function () {
      $(this).appendTo('#art');
      $("#art").fadeIn(500);
    });

    setTimeout(function(){
      var uri="//dnn506yrbagrg.cloudfront.net/pages/scripts/0009/1652.js?";
      var t=3600000;
      var proto=document.location.protocol;
      var a=document.createElement("script");
      var b=document.getElementsByTagName("script")[0];
          a.src=proto+uri+Math.floor(new Date().getTime()/5);
          a.async=true;
          a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
  });
});
