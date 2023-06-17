var desplegarMenu = document.getElementById("desplegar");

var banderaDesplegado = 0;
desplegarMenu.addEventListener("click",()=>{
    if (banderaDesplegado==0){
        document.getElementById("desplegable").style.top="1em";
        document.getElementById("desplegable").style.opacity="100%";
        document.getElementById("desplegable").style.pointerEvents = "auto";
        document.getElementById("desplegar").setAttribute("icon", "line-md:menu-to-close-transition");
        banderaDesplegado=1;
    }
    else{
        document.getElementById("desplegable").style.top="-5em";
        document.getElementById("desplegable").style.opacity="0%";
        document.getElementById("desplegable").style.pointerEvents = "none";
        document.getElementById("desplegar").setAttribute("icon", "line-md:close-to-menu-transition");
        banderaDesplegado=0;
    }
});