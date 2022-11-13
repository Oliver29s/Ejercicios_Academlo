console.log("holaperroshp")
let  estudiantes = [
    { nombre: "Mengano", apellido: "Solis", check1: 16, check2: 8},
    { nombre: "Fulano", apellido: "Rodriguez", check1: 20, check2: 20},
    { nombre: "Zutano", apellido: "Alvarez", check1: 10, check2: 0},
    { nombre: "Perengano", apellido: "Leiria", check1: 17, check2: 19}
] 
function obtenerSoloLosMejores(estudiantes, nota1, nota2) {
    
    for( i = 0; i <= estudiantes.length; i++){
        let nombreApellido = []
      if( estudiantes[i].check1 >= nota1 && estudiantes[i].check2 >= nota2){
        console.log(estudiantes[i].check1)
        console.log(estudiantes[i].check2)
        
         nombreApellido.push(estudiantes[i].nombre + " " + estudiantes[i].apellido)
         return nombreApellido
      }
    }
  };
  console.log(obtenerSoloLosMejores(estudiantes, 15, 15))