// ejercicio 1. Creando variables.
let nombre = "Oliver";
let apellido = "Rodriguez";
let edad = 22;
let ciudad = "Soledad-Colombia"

// ejercicio 2. Suamando valores de un arreglo.

let arrayNumeros = [1, 2, 3]
let suma = arrayNumeros[0] + arrayNumeros[1] + arrayNumeros[2] 


// ejercicio 3. creando un objeto.
let user ={
    nombre:  "Oliver ",
    apellido: "Rodriguez ",
    edad: 22,
}
let nombreCompleto = user.nombre + user.apellido 


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



// for (let i = 1; i <= 15; i++) {
//     if ( i % 3 === 0 && i % 5 === 0) {console.log('FizzBuzz');}
//     if (i % 3 === 0) {console.log('Fizz');}
//     if (i % 5 === 0){console.log('Buzz');}
// }


const store = () => {
  // code here
  let vacioArray =[]
  return {
    addProduct(product) {
      // code here
       vacioArray.push(product)
    },
    removeProduct(product) {
      // code here
     let  vacio = vacioArray.find( item => item !== product )
     vacioArray = [vacio]
    },
    listProducts() {
      // code here
      return vacioArray
    }
  }
}

let  products = [
  {
    id: 1,
    image:'src/imagen/featured1.png',
    name: "Hoddies",
    category: "Hoddies",
    price: 14.00,
    stock: 10,
  },
  {
    id: 2,
    image: "src/imagen/featured3.png",
    name: "Shirts",
    category: "Shirts",
    price: 24.00,
    stock: 15,
  },
  {
    id: 3,
    image: 'src/imagen/home.png',
    name: "Sweatshirts",
    category: "Sweatshirts",
    stock: 20,
    price: 24.00,
  },
];





const getUsersData = (users,data) => {
 let newArray = users.map( user => user[data] )
  return newArray
}

console.log(getUsersData(products,'image'))

