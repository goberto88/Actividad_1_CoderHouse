
// Esta función permite ingresar datos de usuarios, los almacena, y luego evaluar si es mayor o menor de edad, guardando el resultado en un array.
function edadUsuarios (){

// Creo 2 variables, una para los mayores de edad y otra para los menores de edad, ambos son array vacios. 

    let mayorEdad = [];
    let  menorEdad = [];
    
    // Aquí se crea un bucle para interactuar directamente con los usuarios y se les pide que ingresen sus datos.

    while (true){
        const nombre = prompt("Ingrese su nombre: ");
        const apellido = prompt("Ingrese su apellido: ");
        const edad = parseInt(prompt("Ingrese su edad: "));
        
    //Aquí vamos a guardar los datos recaudados, donde vamos a evaluar si es mayor o menor de edad.

        if(edad >= 18){
            mayorEdad.push(nombre + " " + apellido);
    } else {
        menorEdad.push(nombre + " " + apellido);
    
    }
    //Consultamos nuevamente si ingresaremos nuevos usuarios o no.
    const consulta = prompt("¿Desea ingresar otro usuario? si o no");
    
    if(consulta === "no"){
        break;
    }
    
    };

    // Aquí mostraremos los usuarios mayores y menores de edad.

    alert("Usuarios mayores de edad: " + mayorEdad );
    alert("Usuarios menores de edad: " + menorEdad );
    };

edadUsuarios();

