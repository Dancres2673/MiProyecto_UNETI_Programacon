// 1. Definimos los ENUMS: Listas de opciones fijas para no cometer errores
enum GeneroCine {
    Accion = "Acción",
    Drama = "Drama",
    Comedia = "Comedia",
    CienciaFicción = "Ciencia Ficción"
}

enum PaisOrigen {
    Venezuela = "Venezuela",
    Espana = "España",
    USA = "Estados Unidos",
    Francia = "Francia",
    UK = "Reino Unido"
}

// 2. Definimos una INTERFACE: Es el "contrato" o molde que debe seguir cada película
interface PeliculaInfo {
    titulo: string;
    genero: GeneroCine;
    pais: PaisOrigen;
}

// 3. Creamos un ARREGLO (lista) para guardar nuestras películas (10 registros)
const misFavoritas: PeliculaInfo[] = [
    { 
        titulo: "Papita, Maní, Tostón", 
        genero: GeneroCine.Comedia, 
        pais: PaisOrigen.Venezuela 
    },
    { 
        titulo: "El Laberinto del Fauno", 
        genero: GeneroCine.Drama, 
        pais: PaisOrigen.Espana 
    },
    { 
        titulo: "La Habitación del Hijo", 
        genero: GeneroCine.Drama, 
        pais: PaisOrigen.Espana 
    },
    { 
        titulo: "El Origen", 
        genero: GeneroCine.CienciaFicción, 
        pais: PaisOrigen.USA 
    },
    { 
        titulo: "Dune: Parte 2", 
        genero: GeneroCine.CienciaFicción, 
        pais: PaisOrigen.USA 
    },
    { 
        titulo: "Batman: El caballero de la noche", 
        genero: GeneroCine.Accion, 
        pais: PaisOrigen.USA 
    },
    { 
        titulo: "Amélie", 
        genero: GeneroCine.Comedia, 
        pais: PaisOrigen.Francia 
    },
    { 
        titulo: "El profesional (Léon)", 
        genero: GeneroCine.Accion, 
        pais: PaisOrigen.Francia 
    },
    { 
        titulo: "Interestelar", 
        genero: GeneroCine.CienciaFicción, 
        pais: PaisOrigen.USA 
    },
    { 
        titulo: "Harry Potter y la piedra filosofal", 
        genero: GeneroCine.Drama, // Enfoque de fantasía/drama
        pais: PaisOrigen.UK 
    }
];

// 4. Mostramos los datos recorriendo la lista
console.log("--- LISTADO DE PELÍCULAS ---");
misFavoritas.forEach((peli, index) => {
    console.log(`${index + 1}. Película: ${peli.titulo}`);
    console.log(`   Género: ${peli.genero}`);
    console.log(`   País: ${peli.pais}`);
    console.log("----------------------------");
});