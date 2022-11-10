// ejercicio 1. Creando variables.
let nombre = "Oliver";
let apellido = "Rodriguez";
let edad = 22;
let ciudad = "Soledad-Colombia"

// ejercicio 2. Suamando valores de un arreglo.

let arrayNumeros = [1, 2, 3]
let suma = arrayNumeros[0] + arrayNumeros[1] + arrayNumeros[2] 
console.log(suma)


// ejercicio 3. creando un objeto.
let user ={
    nombre:  "Oliver ",
    apellido: "Rodriguez ",
    edad: 22,
}
let nombreCompleto = user.nombre + user.apellido 
console.log(nombreCompleto)

// ejercicio4. obteniendo correos de usuarios.
let users =[
    {
    nombre:"Oliver",
    email: "mawis455@gmail.com",
    edad: 22
},
{
    nombre:"Samer",
    email: "mawiiis455@gmail.com",
    edad: 22
},
{
    nombre:"William",
    email: "maws455@gmail.com",
    edad: 22
},
{
    nombre:"Maria",
    email: "mawiiss455@gmail.com",
    edad: 22
},
{
    nombre:"Samer",
    email: "maawiis455@gmail.com",
    edad: 22
}


]

let correos =[users[0].email,users[1].email,users[2].email,users[3].email,users[4].email,]
console.log(correos)
