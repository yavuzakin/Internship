function rot13(str) { // LBH QVQ VG!

    let shifter = {
        "A" : "N",      "B" : "O",      "C" : "P",      "D" : "Q",      "E" : "R",      "F" : "S",
        "G" : "T",      "H" : "U",      "I" : "V",      "J" : "W",      "K" : "X",      "L" : "Y",
        "M" : "Z",      "N" : "A",      "O" : "B",      "P" : "C",      "Q" : "D",      "R" : "E",
        "S" : "F",      "T" : "G",      "U" : "H",      "V" : "I",      "W" : "J",      "X" : "K",
        "Y" : "L",      "Z" : "M"
    };
    
    return [...str].map(x => 
      { if(shifter.hasOwnProperty(x)) return x.replace(x, shifter[x])
        else return x })
        .toString().split(",").join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));