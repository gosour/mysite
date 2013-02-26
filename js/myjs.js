 window.onload = function()
                {
                  showHome()
                };

 function showHome(){
      document.getElementById("text").innerHTML = '<div style="text-align:center;">' +
		  //'<span style="text-align:center;"><img src="/images/nowwhat.png"> </span>' +
		  '<h1 style="font-size:7em">A REALLY BIG TEXT</h1>'
          '</div>'
      var d = document.getElementById("home");
	  document.getElementById("extra").innerHTML = ""
	  d.className = d.className + " active";
      document.getElementById("about").className = "";
   }
    
    function showAbout(){
      document.getElementById("text").innerHTML = ' <div>' +
          '<span><a = href="/" class="pull-left"> <img src="/images/me.jpg" class="img-circle"></a></span>' +
          '<span style="padding-left:20%;"><a = href="https://plus.google.com/112383595984506575124"><img src="/images/plus.jpg" class="img-circle"></a></span>' +
          '<span><a = href="https://github.com/gosour" class="pull-right"><img src="/images/octo.png" class="img-circle"></a></span>' +
          '</div>'

      document.getElementById("extra").innerHTML = '<ul>' +
      '<li><h5>Not yet optimized for small screens</h5></li>' +
      '<li><h5>Previous stuff now <a href="http://hello.souravgoswami.com">here</a></li>' 

      var d = document.getElementById("about");
      d.className = d.className + " active";
      document.getElementById("home").className = "";
   }
