var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "5px";
  } else {
    document.getElementById("navbar").style.top = "-80px"; // -50px is the height of the navbar
  }
  prevScrollpos = currentScrollPos;
}


function tabClick(id) {  
  for(var i = 0; i < 4; i++) {
  document.getElementsByClassName("tab")[i].style.backgroundColor = "black";
    document.getElementsByClassName("tab")[i].style.color = "white";
 }  
  document.getElementById(id).style.backgroundColor = "#bfbfbf";
  document.getElementById(id).style.color = "black";
  document.getElementById(id + "-content").scrollIntoView({behavior: "smooth"});
}