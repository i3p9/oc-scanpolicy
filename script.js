function totalIt() {
    var input = document.getElementsByName("values");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseInt(input[i].value);
      }
    }
    document.getElementsByName("total")[0].value = total;
    document.getElementsByName("totalhex")[0].value = decimalToHexString(total);
  }


  function decimalToHexString(number)
  {
    number = number.toString(16).toUpperCase()
    number = "0x"+number;
    return number;
  }
