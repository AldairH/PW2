let inventario =[];

//Funcion para menu

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones Disponibles: \n" +
        "1.- Agregar producto. \n" +
        "2.- Mostrar productos.\n" +
        "3.- Buscar producto por nombre. \n" +
        "4-. Salir. \n" +
        "Elije una opción. \n"
    ));
}

function buscarProducto() {
    let busqueda = prompt("Ingresa el producto que deseas buscar: ");
    const productoEncontrado = inventario.find(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (productoEncontrado) {
        alert(`Producto encontrado: ${productoEncontrado.nombre} \n
               Cantidad: ${productoEncontrado.cantidad} \n
               Precio: ${productoEncontrado.precio} 
            `);
    } else {
        alert("Producto no encontrado");
    }
}

function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto:");
    let cantidad = prompt("Introduce la cantidad del progucto:");
    let precio = parseInt(prompt("Introduce el precio del producto:"));

    if(cantidad>0 && precio>0){
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado con exito :D");
    }else{
        alert("La cantidad y precio debden ser numeros positivos");
    }
}

function mostrarProducto(){
    if(inventario.length === 0){
        alert("Inventario vacio.");
    }else{
        let mensaje = "Productos en inventario \n";
        for(i=0;i<inventario.length;i++){
            mensaje += `Producto ${i+1} \n` +
                       `Nombre: ${inventario[i].nombre} \n` +
                       `Cantidad: ${inventario[i].cantidad} \n` +
                       `Precio: ${inventario[i].precio} \n`+
                       "--------------------------------\n"
        }
    alert(mensaje);
    }
}

function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
            break;
            case 2:
                mostrarProducto();
            break;
            case 3:
                buscarProducto();
            break;
            case 4:
                alert("Saliendo del programa...");
            break;
            default:
                alert("Opcion no valida, intenta de nuevo");
            break;
        }
    }
    alert("Programa finalizado");
}

iniciarPrograma();