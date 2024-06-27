const hide = document.getElementById("hidbtn");
const icon = document.getElementById("hidspan");
const nav = document.getElementById("sidenav")
const vid = document.getElementById("myvid")

function handleResize() {

    const screenWidth = window.innerWidth;

    if (screenWidth <= 769) {
        nav.classList.add('hide');
        vid.classList.add('widen')
        icon.innerHTML = "menu";
        
    } else {
        nav.classList.remove('hide');
        vid.classList.remove('widen')
        icon.innerHTML = "arrow_back_ios";
    }
    if (screenWidth >= 1258) {
        hide.classList.add('tr1');
    } else{
        hide.classList.remove('tr1');
    }
    
    
}





document.addEventListener('DOMContentLoaded', function() {
    handleResize(); 
});


window.addEventListener('resize', function() {
    handleResize(); 
});


hide.addEventListener('click',() => {
    
    if (icon.innerHTML === "menu") {
        icon.innerHTML = "arrow_back_ios";
        nav.classList.remove('hide');
        vid.classList.remove('widen');
        
    } else{
        icon.innerHTML = "menu";
        nav.classList.add('hide');
        vid.classList.add('widen');
    }

    
});


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}