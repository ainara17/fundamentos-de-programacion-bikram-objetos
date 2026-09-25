//Iteraciones ⚔️ Pair Programming ⚔️

//1
const Coche = {
    marca: 'cupra',
    modelo: 'ateca', 
    matricula: '1234 JYN',  
};

//2
const Casa ={
    codPostal: 24580 ,
    calle: 'Otxagabia',
    portal: 23,
    piso: 3,

}

//3
const FullStackDeveloper= {
    lenguajes: ['Javascript', 'Python', 'PHP'] ,
    proyectos: ['Portfolio personal', 'Calculador', 'Calendario de Adviento'], 
};


//4
const Perro = {
    nombre: 'Luki' ,
    raza: 'corgi',
    color: 'marrón',
    edad: 4,
    ladrar: function(){ 
        console.log('Woof!');
    },
    popo: function(){
        return Math.random() * 3;
    }
}

//5
const marcaPortatil = Portatil.marca;

//6
const marcaPortatil2 = Portatil['marca'];

//7
const grupos = Concierto.grupos;

//8
const RGB = [Led.rojo, Led.verde, Led.azul];

//9
Portatil.modelo = 'P345';

//10
Concierto.cartelera.push("Guns N' Roses");

//11
Concierto.fecha = new Date();

//12
Impresora.imprimiendo = {
    nombreArchivo: "imprimir",
    copias: 3 ,
    numPaginas: 120 ,
};

//🏰 proyecto individual 🏰

//13
const Noticia = {
    titular: "Unos monos roban la MonaLisa",
    cuerpo: "Han pegado una cascara de plánato en su lugar" ,

};

//14
const Persona = {
    nombre: "Jaime",
    apellidos: "Rivas",
    edad: "33",
};

//15
const Avion = {
    numPasajeros: 78,
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando")
    }
};


//16
const Paquete = {
    contenido: ['kindle', 'portatil', 'manzana', 'estuche']
};


//17
const Pais = {
    numHabitantes: 5000000,
    continente: 'Europa', 
    gentilicio: 'Español',
}

//18
const codError = O_Error.codigo;


//19
const integrantes = Grupo.integrantes;


//20
const nivelesTinta = Impresora.tinta;


//21
const pixeles = Pantalla.pixeles;


//22
const especificaciones = Movil['especificaciones'];


//23
Grupo.numIntegrantes = 5;


//24
Pantalla.dimensiones = '1920x1080';


//25
if(Led.encendido){
    Led.encendido = false;
}else{
    Led.encendido = true;
};


//26
Movil.temperatura = '20º';