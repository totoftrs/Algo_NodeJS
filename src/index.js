var fs = require('fs');
var path = require('path');
const DATA_FOLDER = path.resolve(__dirname, "../data");
// const { isValid, parse } = require("date-fns");

(async function (){
  let horaireIndisponible = {}

  let filePath = path.resolve(DATA_FOLDER, "input1.txt");
  let file = await fs.readFileSync(filePath);
  file = file.toString();
  file = file.split("\n");
  // console.log("file", file);

  for(line of file){
    // console.log(line)
    var day = line[0]
    // console.log("day :" ,day)
    if(!horaireIndisponible[day]){
      horaireIndisponible[day] = []
    }

    horaireIndisponible[day].push(line.substring(2));
    var dateDebut = line.substring(2).split('-');
    // console.log(dateDebut,"dateDebut")
  }
  console.log("horaireIndisponible", horaireIndisponible);
  for(let heure = 8 ; heure < 17; heure++){
    // à creuser !
    for(let day in horaireIndisponible ){
      let horaires = horaireIndisponible[day];
      let goodSpot = false;
      horaires.forEach(horaire=>{
        let startHour =  Number.parseInt(horaire.split(":")[0]);
        let endHour =  Number.parseInt(horaire.split(":")[1].split("-")[1]);
        console.log("heure:", heure, "startHour", startHour, "endHour", endHour )
        if(heure === startHour && heure < endHour){
          return;
        }
        console.log("good spot:",heure);
        goodSpot = heure;
      });

    }
  }
  
  console.log("horaire : ", horaireIndisponible);

  
})();
  
