

    const urlApi = 'https://randomuser.me/api/?gender=male';
    const solicitud = new XMLHttpRequest();
    solicitud.open('GET', urlApi);
    solicitud.responseType = 'json';
    solicitud.send();

    solicitud.onload = function() {
      
        const usuarioAl = solicitud.response;
        generoDatos(usuarioAl);
        generoLista(usuarioAl);
      }


      let listaLi = ['#lista1', '#lista2', '#lista3', '#lista4', '#lista5'];

      function generoDatos(datosC){
        
        var direccion = `${datosC['results'][0]['location']['street'].name +   ', ' + datosC['results'][0]['location']['street'].number}`;
        var urlFoto = (datosC['results'][0]['picture'].large);

        $('#mail').text(datosC['results'][0].email);
        $('#cel').text(datosC['results'][0].cell);
        $('#ubi').text(direccion);
        $('#fotoPefil').attr('src', urlFoto);
      }


      function generoLista(datosU) {
        console.log(datosU);

        const datosPers = {};
        let i = 0;

        var fechaNac = datosU['results'][0]['dob'].date;
        let subFechaNac = fechaNac.substring(0, 9);
        let nombre = `${datosU['results'][0]['name'].first + ' ' + datosU['results'][0]['name'].last}`;
        
        document.querySelector('#nombreTitulo').innerHTML = nombre;

        
        datosPers.Nombre = nombre;
        datosPers.Edad = datosU['results'][0]['dob'].age + `  (${subFechaNac})`;
        datosPers.Pais = `${datosU['results'][0]['location'].city}, ${datosU['results'][0]['location'].country}`;
        datosPers.Nacionalidad = datosU['results'][0].nat;
        datosPers.Phone = datosU['results'][0].phone;
        
            
        for (const claveValor in datosPers) {
            console.log(`${claveValor}: ${datosPers[claveValor]}`);
            document.querySelector(listaLi[i]).innerHTML = datosPers[claveValor];
            i = i+1;
          }
          }




  
  
   