var mouseSobreZapatoH = document.getElementById("filaZ1");
var mouseSobreZapatoM = document.getElementById("filaZ2");
var mouseSobrePatoO = document.getElementById("filaZ3");

mouseSobreZapatoH.addEventListener("mouseover",()=>{
    document.getElementById("zapatoH").style.left="35em";
    document.getElementById("ozh").style.opacity="100%";
    document.getElementById("ozh").style.pointerEvents="auto";
});
mouseSobreZapatoH.addEventListener("mouseout",()=>{
    document.getElementById("zapatoH").style.left="0";
    document.getElementById("ozh").style.opacity="0%";
    document.getElementById("ozh").style.pointerEvents="none";
});

mouseSobreZapatoM.addEventListener("mouseover",()=>{
    document.getElementById("zapatoM").style.left="35em";
    document.getElementById("ozm").style.opacity="100%";
    document.getElementById("ozm").style.pointerEvents="auto";
});
mouseSobreZapatoM.addEventListener("mouseout",()=>{
    document.getElementById("zapatoM").style.left="0";
    document.getElementById("ozm").style.opacity="0%";
    document.getElementById("ozm").style.pointerEvents="none";
});

mouseSobrePatoO.addEventListener("mouseover",()=>{
    document.getElementById("pataO").style.left="35em";
    document.getElementById("oop").style.opacity="100%";
    document.getElementById("oop").style.pointerEvents="auto";
});
mouseSobrePatoO.addEventListener("mouseout",()=>{
    document.getElementById("pataO").style.left="0";
    document.getElementById("oop").style.opacity="0%";
    document.getElementById("oop").style.pointerEvents="none";
});