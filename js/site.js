function rot13(s) {
  return s.replace( /[A-Za-z]/g , function(c) {
    return String.fromCharCode( c.charCodeAt(0) + ( c.toUpperCase() <= "M" ? 13 : -13 ) );
  } );
}

$(document).ready(function() {
      escapes('/screen.txt', function () {
      var socket = io();
      $(this).appendTo('#art');
      $("#art").fadeIn(500);
      $('#term').terminal(function(command, term) {
        if (command !== '') {
            try {
              if (command == "player") {
                window.location.href = "http://bit.ly/denzuko";
              } else if (command == 'rot13') {
                term.echo(rot13("Hello, World!"));
              } else if (command == 'shell') {
                window.location.href = "http://telehack.com/"
              } else {
                  var result = window.eval(command);
                  if (result !== undefined) {
                    term.echo(new String(result));
                    socket.emit('chat message', command);
                  }
              }
              $('#term').val('');
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
      }, {
        greetings: '',
        name: 'term',
        height: 300,
        prompt: '% '
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