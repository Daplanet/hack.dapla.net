requirejs.config({
    paths: {
        'jquery': 'jquery.min',
        'jquery.terminal': 'jquery.terminal.min',
        'escapes': 'escapes.min'
    }, 
    shim: {
        'jquery.terminal': { dep: ['jquery']},
	      'escapes': { deps: ['jquery']}
    }
});

var libs = [
    "jquery",
    "escapes"
];

require(libs, function($, undefined) {
  $(document).ready(function() {
    escapes('/screen.txt', function () {
      $(this).appendTo('#art');
      $("#art").fadeIn(500);
          
      $('#term').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
      }, {
        greetings: 'HackOS v1.0',
        name: 'term',
        prompt: 'js> '
      });
    });

    setTimeout(function(){
      var uri="//dnn506yrbagrg.cloudfront.net/pages/scripts/0009/1652.js?";
      var t=3600000;
      var proto=document.location.protocol;
      var a=document.createElement("script");
      var b=document.getElementsByTagName("script")[0];
          a.src=proto+uri+Math.floor(new Date().getTime()/5);
          a.async=true;
          a.type="text/javascript";b.parentNode.insertBefore(a,b);
      
    }, 1);
  
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-31453007-3', 'hack.dapla.net');
	ga('send', 'pageview');
  });
});