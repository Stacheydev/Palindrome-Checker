const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
let palindrome;

function checkPalindrome(){
    let val = textInput.value;
    let cleanVal = textInput.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if(val === ""){
        alert("Please input a value");
    }
    else{
        const valReverse = cleanVal.split("").reverse().join("");
        if(cleanVal === valReverse){
            palindrome = true;
        }
        else{
            palindrome = false;
        }

        if(palindrome){
            result.innerText = val + " is a palindrome"
        }
        else{
            result.innerText = val + " is not a palindrome"
        }
    }    
}

checkBtn.addEventListener("click", checkPalindrome);
