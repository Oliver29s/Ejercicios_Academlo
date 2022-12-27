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
let studentsByScore = [
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]

function orderStudentsByScore(students) {
  return students.sort((a,b) => a.score - b.score)
}







// ejercicio 10 Replit
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


//  Ejercicio 11 de replit
 let age = [
      { name: 'Daniela', age: 25 },
      { name: 'Andrea', age: 27 },
      { name: 'José', age: 27 },
      { name: 'Georg', age: 27 },
    ];
 
function findMostCommonAge(students) {
      let obj = {}
      let edadRepetida = 0
      let vecesRepetida = 0

      for (let i = 0; i < students.length; i++) {
        const e = students[i].age
        if (obj[e]) {
          obj[e]++
        }else{
          obj[e] = 1
        }
      } 
      for (const key in obj) {
        if (obj[key] > vecesRepetida)  {
          vecesRepetida = obj[key]
          edadRepetida = key
        }
      } return Number(edadRepetida)
    }   

console.log(findMostCommonAge(age));

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


// ejercicio 17 de replit

let channel1 = [
  { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
  { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
  { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
];

function countApplicationsByChannel(students) {
 let objVacio = {}
 let arrayNew = students.filter( a => a.application != null) 

    for (i = 0; i < arrayNew.length; i++) {
      let users = arrayNew[i]
      if (objVacio[users.channel]) {
        objVacio[users.channel]++
      }else{
        objVacio[users.channel] = 1
      }
    } return objVacio
  
}
console.log(countApplicationsByChannel(channel1));

// ejercicio 18 replit  

function countNumbers(number) {
  let separado = String(number).length
  return separado
}



// ejercicios de Platzi

// Pide la edad y si es mayor de 18 años indica que ya puede conducir.
function agee(number, name){
 if (number >= 18) {
  return ` Hola ${name} ya puedes conducir`
 }else{
  return ` Hola ${name} no puedes conducir`
 }
}

//Pide una nota (número). Muestra la calificación según la nota:

function note(number){
  switch (number) {
    case 0:
    case 1:
    case 2:  
    return 'muy indeficiente';
    break;
    case 3:
    case 4:
    
    return 'insuficiente';
    break;
    case 5:
    case 6:
    case 7:
    return 'bien'   
    break; 
    case 8:
    case 9:
    case 10:
      return ' Excelente'
      break
    default:
      break;
  }
}


// ejercicios vacaciones

function wordInTheMiddle(phrase) {
   let mitad1 = phrase.split(' ')
  let mitad2 = mitad1[Math.floor(mitad1.length / 2)]
  let mitad3 = mitad2 - 1
  let mitad4 = mitad2 + mitad3
  if (mitad2 % 2 == 0) {
    return mitad2
  }else{
    return mitad4
  }
}


// ejercicio 2

function firstLetterOfEachWord(str) {
  let strLength = str.split(' ')
  let strVacio = ''
  for (let i = 0; i < strLength.length; i++) {

    strVacio += strLength[i][0]
  }
  return strVacio
}

console.log(firstLetterOfEachWord('hola soy oliver'));


// ejercicio 4 

function firtsLetterLower(str) {
  let str1 = str.split(" ")
 return str1.map(p => p[0].toLowerCase() + p.slice(1)).join(' ')
}

//ejercicio

function wordInTheMiddle(phrase) {
    let phraseOne = phrase.split(" ")
    let phraseNum =  Math.floor(phraseOne.length / 2)
    let phraseNum2 =  phraseNum - 1
    if(phraseNum === 4){return  phraseOne[phraseNum2] + " " + phraseOne[phraseNum] }
    if (phraseNum  === 1) {return phraseOne[phraseNum] }
    if (phraseNum % 2 === 0) {return phraseOne[phraseNum] }
    if(phraseNum % 2 !== 0){return  phraseOne[phraseNum2] + " " + phraseOne[phraseNum] }
    
}

console.log(wordInTheMiddle('este ejercicio esta muy facil para el profe'));