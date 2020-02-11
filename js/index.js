//while click on #digits appiers in #input
//while click on #commands appiers in input
//when click + or / first input number and command appiers above input and #input reset
//then input another number
//then #commands = gives result if only #comannds * / + - are applied and result appiers above input and #input
/*
Enter 1

- 1 appears in #Input

Enter *

- 1 * appears in #result
- #input is cleared

Enter 2
- 2 appears in #input

Enter =
- 1 * 2 = 2 appears above input
- #input is cleared
*/
(function init() {
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let digits = document.getElementById("digits");
    let commands = document.getElementById("commands");
    let endCommands = document.getElementById("end-commands");
  
    digits.addEventListener("click", function(e) {
      input.value += parseInt(e.target.innerText);
    });
  
    commands.addEventListener("click", function(e) {
      result.value = input.value += e.target.innerText;
      input.value = "";
    });
  
    endCommands.addEventListener("click", function(e) {
      if (e.target.innerText === "=" && input.value === "0") {
        result.value = "";
        input.value = "";
        return;
      }
  
      if (e.target.innerText === "=") {
        result.value =
          result.value +
          input.value +
          " = " +
          eval(result.value + input.value).toFixed(3);
        input.value = "";
        return;
      }
  
      if (e.target.innerText === "C") {
        result.value = "";
        input.value = "";
      }
    });
  })();
  