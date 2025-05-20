(() => {

    const estudiante = {
        nombre: 'mike',
        ap: 'Stark',
        f_nacimiento: '01/02/1995',
        matricula: '303030303',

        domicilio: { //Se abre otro objeto ya que este contiene mas cosas
            calle: 'hidalgo',
            num_ext: '102',
            num_int: '',
            cp: 38240,
            municipio: 'Juventino rosas',
            estado: 'Guanajuato',
            pais: 'Mexico',
            gps: '',
            colonia: 'valencia'
        }
    };

    //const estudiante2 = estudiante;
    const estudiante2 = structuredClone(estudiante); //para clonar la estructura para no tener cambios en las estructuras.
    estudiante2.nombre = 'Shagy';

    console.log({estudiante});
    console.log({estudiante2});




    const laex = {
        nombre: 'la guera',
        tel: '4124121212',
        f_nacimiento: '10/05/1996',
        foto: '/fotos/laguera.jpg',
        mascota: 'fonzi',

        domcilio:{
            calle: '',
            num: '',
            colonia: 'rio grande',
            
        }
    };

    console.log({laex});
})()
