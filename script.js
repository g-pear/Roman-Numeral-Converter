const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const number = document.getElementById("number");



const checkInput = (num) => {  
    if(num === "") {
        return output.innerText = "Please enter a valid number";
    } else if(num < 1) {
        return output.innerText = "Please enter a number greater than or equal to 1";
    } else if(num >= 4000) {
        return output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        output.innerText = convert(number.value);
    }
}

const convert = num => {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";
  for(let key in romanNumerals) {
    while(num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
    }
  }
  return result
}

convertBtn.addEventListener("click", () => {
   checkInput(number.value);
   
})
