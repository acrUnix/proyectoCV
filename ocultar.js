


function muestraTexto(){

    if($('#divDocs').css('display') == "none"){
        $('#divDocs').show(700);

    }else{
        $("#divDocs").hide(700);
    }}



window.onload = (function(){
    let boton1 = document.querySelector('#boton1');
    boton1.addEventListener('click', muestraTexto);

})

