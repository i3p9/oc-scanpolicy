const allbits = [
  "bit0",
  "bit1",
  "bit8",
  "bit9",
  "bit10",
  "bit11",
  "bit12",
  "bit16",
  "bit17",
  "bit18",
  "bit19",
  "bit20",
  "bit21",
  "bit22",
  "bit23",
  "bit24",
];

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

function decimalToHexString(number) {
  number = number.toString(16).toUpperCase();
  number = "0x" + number;
  return number;
}

function clearAll() {
  for (var i = 0; i < allbits.length; i++) {
    console.log(allbits[i]);
    document.getElementById(allbits[i]).checked = false;
    totalIt();
  }
}

function defaultOC() {
  clearAll();
  let def = ["bit0", "bit1", "bit8", "bit16", "bit17", "bit18", "bit19"];
  for (var i = 0; i < def.length; i++) {
    console.log(def[i]);
    document.getElementById(def[i]).checked = true;
    totalIt();
  }
}

function hideNtfs() {
  clearAll();
  let ntfs = ["bit0", "bit1", "bit8", "bit9", "bit16", "bit19", "bit21"];
  for (var i = 0; i < ntfs.length; i++) {
    console.log(ntfs[i]);
    document.getElementById(ntfs[i]).checked = true;
    totalIt();
  }
}
