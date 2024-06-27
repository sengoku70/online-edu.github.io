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

const sidenav = document.getElementById("sidenav");
const icon = document.getElementById("hidspan");
const hide = document.getElementById("hidbtn");
const logbtn = document.getElementById("log");
const logbox = document.getElementById("login")

function handleResize() {

    const screenWidth = window.innerWidth;

    if (screenWidth <= 808) {
        sidenav.classList.add('hide');
        
        icon.innerHTML = "menu";
        
    } else {
        sidenav.classList.remove('hide');
        
        icon.innerHTML = "arrow_back_ios";
    }
    if (screenWidth >= 1258) {
        hide.classList.add('tr1');
        sidenav.classList.add('hide');
    } else{
        hide.classList.remove('tr1');
        sidenav.classList.remove('hide')
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
        sidenav.classList.remove('hide');
        
        
    } else{
        icon.innerHTML = "menu";
        sidenav.classList.add('hide');
        
    }  
}); 


const mobbtn = document.getElementById("mobbtn");
const emlbtn = document.getElementById("emlbtn");
const dark = document.getElementById("dark");
const cutbtn = document.getElementById("cutbtn");
const fillbox = document.getElementById("fillbox");


logbtn.addEventListener('click',() => {
    dark.classList.add('pop');
    
})

cutbtn.addEventListener('click',() => {
    dark.classList.remove('pop');
    
});

mobbtn.addEventListener('click',() => {
    mobbtn.style.backgroundColor= 'rgb(0, 229, 255)';
    emlbtn.style.backgroundColor= ' #ddd';
    
});
emlbtn.addEventListener('click',() => {
    mobbtn.style.backgroundColor= ' #ddd';
    emlbtn.style.backgroundColor= 'rgb(0, 229, 255)';
    
});



