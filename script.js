var body = document.getElementById("body");
var topBg = document.getElementById("top_bg")
var toggleBtn1 = document.getElementById("dark");
toggleBtn1.addEventListener("click", function () {
  if ((body.style.background = "hsl(0, 0%, 100%)")) {
    body.style.background = "hsl(230, 17%, 14%)";
    body.style.color = "white";
    topBg.style.background = "hsl(232, 19%, 15%)"
    body.style.transition = "all, ease 1.2s";
    var box = document.getElementsByClassName("box");
    for (var i = 0; i < box.length; i++) {
      box[i].style.background = "hsl(228, 28%, 20%)";
      box[i].style.transition = "all, ease 1.2s";
    }
    var boxex = document.getElementsByClassName("sbox");
    for (var i = 0; i < boxex.length; i++) {
      boxex[i].style.background = "hsl(228, 28%, 20%)";
      boxex[i].style.transition = "all, ease 1.8s";
    }
    var count = document.getElementsByClassName("count");
    for(var i = 0; i<count.length; i++) {
      count[i].style.color = "white";
    }
    var num = document.getElementsByClassName("num");
    for(var i = 0; i<num.length; i++) {
      num[i].style.color = "white"
    }
    toggleBtn1.style.display = "none";
    toggleBtn2.style.display = "block";
    toggleBtn2.style.transition = "all, ease 1.2s";
  }
});

 var toggleBtn2 = document.getElementById("light");
    toggleBtn2.addEventListener("click", function () {
        body.style.background = "hsl(0, 0%, 100%)";
        body.style.color = "black";
        topBg.style.background = "hsl(225, 100%, 98%)"
        body.style.transition = "all, ease 1.2s";
        var box = document.getElementsByClassName("box");
        for (var i = 0; i < box.length; i++) {
          box[i].style.background = "hsl(227, 47%, 96%)";
          box[i].style.transition = "all, easeIn 1.8s";
        }
        var boxex = document.getElementsByClassName("sbox");
        for (var i = 0; i < boxex.length; i++) {
          boxex[i].style.background = "hsl(227, 47%, 96%)";
          boxex[i].style.transition = "all, easeIn 1.2s";
        }
        var count = document.getElementsByClassName("count");
        for(var i = 0; i<count.length; i++) {
          count[i].style.color = "hsl(230, 17%, 14%)";
        }
        var num = document.getElementsByClassName("num");
        for(var i = 0; i<num.length; i++) {
          num[i].style.color = "hsl(230, 17%, 14%)"
        }
        toggleBtn1.style.display = "block";
        toggleBtn2.style.display = "none";
       toggleBtn1.style.transition = "all, ease 1.2s";
      });


      //Additional Functionalities

      //Total Followers
      var totalFollower = document.getElementById('totalFollowers');
      var fcount = parseInt(document.getElementById('f-count').innerHTML);
      var tcount = parseInt(document.getElementById('t-count').innerHTML);
      var icount = parseInt(document.getElementById('i-count').innerHTML);
      var ycount = parseInt(document.getElementById('y-count').innerHTML);
totalFollower.innerHTML = fcount + tcount + icount + ycount;