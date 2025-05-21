function promesaSimple() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promesa simple ejecutada despues de 8s");
        }, 8000);
    });
}
    
promesaSimple().then(mensaje => {
    console.log(mensaje);
})

