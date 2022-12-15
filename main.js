// Ejercicio 6 Replit
{
  //   let  estudiantes = [
  //   { name: "Erik", email: "erik@academlo.com", age: 20 },
  //   { name: "Georg", email: "georg@academlo.com", age: 30 },
  //   { name: "Daniel", email: "daniel@academlo.com", age: 40 },
  // ]

  // function getEmails(users) {


  //   let registrCorreo = []
  //   for( let i = 0; i < users.length; i++){
  //     registrCorreo.push(users[i].email)


  //   }


  //   return registrCorreo

  // }
}


// ejercicio 7 Replit
{
  //   let x =  [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }]


  // function deleteUser(users, email) {
  //   let x2 = []
  //   for(let i = 0; i < users.length; i++){
  //         if(users[i].email != email){
  //            x2.push(users[i])
  //         }

  //     }return x2
  // }
}



// ejercicio 8 replit

    let array11 = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
  ]

  let array22= [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
  ]

  function mergeData(users, attendances) {
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < attendances.length; j++) {
        if (users[i].email == attendances[j].email) {
          users[i].attendance = attendances[j].attendance
        }
        
      }
      
    }return users

  } 


console.log(mergeData(array11, array22));
// ejercicico 9 replit

let array111 = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

let array222 = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]

function countStudents(students, countries, countryName) {
  let acumulado = 0
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < countries.length; j++) {
      if (students[i].country_id === countries[j].id &&  countries[j].name == countryName) {
        acumulado++
      }

    }


  }return acumulado
}

console.log(countStudents(array111, array222, "Colombia"));


// ejercicio 10 Replit
let estuPAis = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

let pais = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
]

function countStudents(students, countries, countryName) {
  let id = []
  for (i in students) {
    id.push(students[i].country_id)
  }
  return id

}
//  Ejercicio 11 de replit

 let studentsByScore = [
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]

function orderStudentsByScore(students) {
  return students.sort((a,b) => a.score - b.score)
}

console.log(orderStudentsByScore(studentsByScore));


// ejercicio 12 Replit
const users = [
  {
    name: 'Erik',
    gender: 'male',
    age: 22,
  },
  {
    name: 'Daniela',
    gender: 'female',
    age: 22,
  },
  {
    name: 'Gustavo',
    gender: 'male',
    age: 49,
  },
  {
    name: 'María',
    gender: 'female',
    age: 35,
  },
];

function findUser(users, name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() == name.toLowerCase()) {
      return users[i]
    }
  }

}
//  ejercicio 13 replit

let aplicacion = [
  { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
  { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }
];

function getApplications(users) {
  let aplicacion1 = []
  for (i = 0; i < users.length; i++) {
    if (users[i].application !== null && users[i].application !== undefined) {
      aplicacion1.push(users[i])
    }
  } return aplicacion1
}


// ejercicio 14 replit
function sumEvens(start, end) {
  let suma = 0
  for (let i = start; i < end; i++) {

    if (i % 2 == 0) {

      suma += i

    }
  } return suma - start
}

// ejercicio 15 replit

function getMultiples(number, limit) {
  let multipliDe20 = []
  for (let i = number; i < limit; i++) {
    if (i % number == 0) {
      multipliDe20.push(i)

    }

  } multipliDe20.shift()
  return multipliDe20
}



// ejercicio 16 de replit
function countLetter(phrase, letter) {
  let phraseLowerCase = phrase.toLowerCase()
  let letterLowercase = letter.toLowerCase()
  let contador = 0
  for( let i = 0; i <= phrase.length; i++){
    if(phraseLowerCase[i] == letterLowercase){contador++}
  } return contador

}
console.log( countLetter("Hola, me llamo Erik", "a"));

// ejercicio 17 de replit

let channel1 = [
  { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
];

function countApplicationsByChannel(students) {
  let contador = 0
  let contador1 = 0
  
    for (i = 0; i < students.length; i++) {
      if (students[i].application !== null ) {
        if(students[i].channel == "youtube"){contador++}
        if(students[i].channel == "twitter"){contador1++}
      }
    } return{
      youtube:`${contador}`,twitter: `${contador1}` }
  
}
console.log(countApplicationsByChannel(channel1));

// ejercicio 18 replit  

function countNumbers(number) {
  let separado = String(number).length
  return separado
}





