function telephoneCheck(str) {
    // Good luck!
    
    let strOne = str.split(/\D/).join("");
    
    if(str.split("(").length > 2) return false;
    if(~str.indexOf(")") && !~str.indexOf("(") || (~str.indexOf("(") && str.split(/\(\d{3}\)/).length == 1)) return false;
    if(!Number.isInteger(Number(str[0])) && str[0] !== "(") return false;
    if(!(strOne.length == 10 || (strOne.length == 11 && str[0] == "1"))) return false;
  
    return true;
    
  }
   
  console.log(telephoneCheck("(605)4756j961"))