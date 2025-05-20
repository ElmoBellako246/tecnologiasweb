(() => {

    const nombres = ['Hugo','Paco','Luis','Pedro','Hector'];
    const edades = [35,50,40,18,30];

    //Para saber cual es el valor maximo y minimo.
    const edadMin = edades.reduce((a, b) => a < b ? a : b); //Obtener la edad menor
    const edadMax = edades.reduce((a, b) => a > b ? a : b); //Obtener la edad mayor

    //Para poder coincidir los las edades maximas y minimas.
    const Min = edades.findIndex(e => e === edadMin);
    const Max = edades.findIndex(e => e === edadMax);

    console.log(`${nombres[Min]} tiene ${edadMin} años`);
    console.log(`${nombres[Max]}tiene ${edadMax} años`);

})()
