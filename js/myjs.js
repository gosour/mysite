 window.onload = function()
                {
                  showHome()
                };

 function showHome(){
      document.getElementById("text").innerHTML = '<div style="text-align:center;"> <h1> Thanks for dropping by!</h1>' + 
          '<h4> This site is under construction.So nothing much :(' +
          '</h4>'+
          '<h2>But when done it'+"'s" + ' gonna be legen..</h2>' +
          '</div>'
      var d = document.getElementById("home");
      document.getElementById("extra").innerHTML = '<span><img src="/images/nowwhat.png"></span><span class="pull-right"><img src="/images/nowwhat2.png"></span>'
      d.className = d.className + " active";
      document.getElementById("rants").className = "";
      document.getElementById("about").className = "";
   }
    
   function showRants(){
      document.getElementById("text").innerHTML = '<div>'+
          '<h1>My Rants</h1>' +
          '<h4> ' +
            'I am currently developing my own blogging platform (elitist me!). <br>' +
            'You can check out it' + "'s" + ' development and possible rants <a href="http://rants.souravgoswami.com">here</a>' +
            'You can also follow my novice code in my <a href="https://www.github.com/gosour">github profile</a>.' +
          '</h4>' +
          '</div>' 
      document.getElementById("extra").innerHTML = '<span style="padding:30%"><img src="/images/rant.png"></span>'
      var d = document.getElementById("rants");
      d.className = d.className + " active";
      document.getElementById("home").className = "";
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
      document.getElementById("rants").className = "";
      document.getElementById("home").className = "";
   }
