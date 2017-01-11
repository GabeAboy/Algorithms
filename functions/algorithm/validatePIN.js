//checks a pin that cannot have strings
//pin.length must me 4 or 6
function validatePIN (pin) {
      var length = pin.length;
      if(/\9/.test(pin))return false;
      if(length===4||length===6)return true;
      else return false;
 }
console.log(validatePIN('12349'));
