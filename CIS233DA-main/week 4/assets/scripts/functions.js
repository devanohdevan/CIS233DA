showTime();

  var gasLevel = 0;

  function getGas() {
    if (gasLevel === 0) {
      gasLevel = 1;
      document.getElementById("gasImg").src = "assets/images/gas1.png";
      document.getElementById("bttnGasImg").src = "assets/images/bttn_gas_1.png";
    } else {
      gasLevel = 0;
      document.getElementById("gasImg").src = "assets/images/gas0.png";
      document.getElementById("bttnGasImg").src = "assets/images/bttn_gas_0.png";
    }
  }
  