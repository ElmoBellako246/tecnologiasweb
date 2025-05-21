(()=>{

    type batimovil ={
        carroceria: String,
        modelo: String,
        antibalas: Boolean,
        pasajeros: Number
    }

    let batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
    };




    type bumblebee = {
        carroceria: string,
        modelo: string,
        antibalas: boolean,
        pasajeros: number
        disparo?: string
    }

    const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
        }
    };




    type villanos = {
        nombre: string,
        edad: number,
        mutante: boolean
    }

    const villanos = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
    },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
    },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
    }];




    type charles = {
        poder: string,
        estatura: number
    }

    const charles = {
    poder:"psiquico",
    estatura: 1.78
    };



    type apocalipsis = {
        lider: boolean,
        miembros: string[]
    }

    const apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
    }




    let mystique;

    mystique = charles;
    mystique = apocalipsis;
})()
