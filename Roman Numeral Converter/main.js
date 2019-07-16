function convertToRoman(num) {

    let oneR = "I";
    let fiveR = "V";
    let tenR = "X";
    let fiftyR = "L";
    let hundredR = "C";
    let fiveHundredR = "D";
    let thousandR = "M";
    let str = "";
    
      let thousand = Math.floor(num / 1000);
      num = num % 1000;
      str += thousandR.repeat(thousand);
      if(num >= 900 && num < 1000)
        str += hundredR + thousandR;
      else {
        let fiveHundred = Math.floor(num / 500);
        str += fiveHundredR.repeat(fiveHundred);
    
        num = num % 500;
        if(num >= 400 && num < 500)
          str += hundredR + fiveHundredR;
        else {
          let hundred = Math.floor(num / 100);
          str += hundredR.repeat(hundred);
      }
      }
      num = num % 100;
  
      if(num >= 90 && num < 100)
        str += tenR + hundredR;
      else {
        let fifty = Math.floor(num / 50);
        str += fiftyR.repeat(fifty);
      
        num = num % 50;
        console.log(num);
        if(num >= 40 && num < 50)
          str += tenR + fiftyR;
        else {
          let ten = Math.floor(num / 10);
        str += tenR.repeat(ten);
      }
      }
      num = num % 10;
      if(num === 9)
        str += oneR + tenR; 
      else {
        let five = Math.floor(num / 5);
        str += fiveR.repeat(five);
        num = num % 5;
      
        let one = Math.floor(num / 1);
        if(one === 4)
          str += oneR + fiveR;
        else
          str += oneR.repeat(one);
        }
  
    return str;
  }
  
  convertToRoman(3999);