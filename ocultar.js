


function muestraTexto(event){

    if($('#parrafo2').css('display') == "none"){
        $('#parrafo2').show(700);

    }else{
        $("#parrafo2").hide(700);
    }}



window.onload = (function(){
    let boton1 = document.querySelector('#boton1');
    boton1.addEventListener('click', muestraTexto);

})

