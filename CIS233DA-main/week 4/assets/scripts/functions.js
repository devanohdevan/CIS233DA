  showTime();

let gasLevel = 0;
let traction = 1;
let park = 1;
let battery = 0;

function getGas(){
    if(gasLevel == 0){
        gasLevel = 1;
        document.getElementById("gas").src = "./assets/images/gas1.png";
        document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_1.png";
    }
    else{
        gasLevel = 0;
        document.getElementById("gas").src = "./assets/images/gas0.png";
        document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_0.png";
    }
}

function tracControl(){
    if(traction == 0){
        traction = 1;
        document.getElementById("trac").src = "./assets/images/trac1.png";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_1.png";
    }
    else{
        traction = 0;
        document.getElementById("trac").src = "./assets/images/trac0.png";
        document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_0.png";
    }
}

function batteryCharge(){
    if(battery == 0){
        battery = 1;
        document.getElementById("batt").src = "./assets/images/batt1.png";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_1.png";
    }
    else{
        battery = 0;
        document.getElementById("batt").src = "./assets/images/batt0.png";
        document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_0.png";
    }
}

function parkBrake(){
    if(park == 0){
        park = 1;
        document.getElementById("brake").src = "./assets/images/p1.png";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_1.png";
    }
    else{
        park = 0;
        document.getElementById("brake").src = "./assets/images/p0.png";
        document.getElementById("bttn_park").src = "./assets/images/bttn_park_0.png";
    }
}

function setMode() {
  var gearshiftStatus = 0;
  var gearshiftIndicator = document.getElementById("gearshiftIndicator");
  var gearshiftImage = document.getElementById("gearshiftImage");

  switch (gearshiftStatus) {
    case 0:
      gearshiftStatus = 1;
      gearshiftIndicator.innerHTML = "ECO PRO";
      gearshiftImage.style.top = "720px";
      break;
    default:
      gearshiftStatus = 0;
      gearshiftIndicator.innerHTML = "PARK";
      gearshiftImage.style.top = "700px";
      break;
  }
}


  