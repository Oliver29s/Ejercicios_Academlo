// Ejercicio 6 Replit
let  estudiantes = [
  { name: "Erik", email: "erik@academlo.com", age: 20 },
  { name: "Georg", email: "georg@academlo.com", age: 30 },
  { name: "Daniel", email: "daniel@academlo.com", age: 40 },
]

function getEmails(users) {
  
 
  let registrCorreo = []
  for( let i = 0; i < users.length; i++){
    registrCorreo.push(users[i].email)
   
    
  }

  
  return registrCorreo
  
}



// ejercicio 7 Replit

function deleteUser(users, email) {
  for(let i = 0; i < users.length; i++){
        if(users[i].email == email){
            delete users[i]
            return users
           
        }
        
    }
}
// console.log(deleteUser(estudiantes, "georg@academlo.com"));

// ejercicio 8 replit
let array1 = [
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]

let array2 = [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]

function mergeData(users, attendances) {
  
  
}
 // ejercicico 9 replit
let calificacion = [
  { name: 'Georg', email: 'georg@academlo.com', score: 100 },
  { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
  { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
]

 function orderStudentsByScore(students) {
  
   
  

}


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
  for(i in students){
    id.push(students[i].country_id)
  }
  return id

}



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
  for(let i = 0; i < users.length; i ++){
    if(users[i].name.toLowerCase() == name.toLowerCase()){
      return users[i]
    }
  }

}
//  ejercicio 13 replit

