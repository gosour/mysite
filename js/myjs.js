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
      var d = document.getElementById("rants");
      d.className = d.className + " active";
      document.getElementById("home").className = "";
      document.getElementById("about").className = "";
   }

   function showAbout(){
      document.getElementById("text").innerHTML = ' <div>' +
          '<img src="/images/me.jpg" class="img-circle">' +
          '<div class="pull-right" class="well">' +
          '<!-- Place this code where you want the badge to render. -->' +
          '<a href="//plus.google.com/112383595984506575124?prsrc=3" rel="publisher" style="text-decoration:none;">' +
          '<img src="//ssl.gstatic.com/images/icons/gplus-64.png" alt="Google+" style="border:0;width:64px;height:64px;"/></a>' +
          '</div>'

      var d = document.getElementById("about");
      d.className = d.className + " active";
      document.getElementById("rants").className = "";
      document.getElementById("home").className = "";
   }
