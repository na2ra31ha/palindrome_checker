const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const changeMth = document.getElementById('change-mouth');

const checkPalindrome = (input) => {
    // the prompt for any empty input field
    
    const originalValue = input;
    if(input == ""){
        alert("Please input a value");
        return null;
    }
    

    //reseting the existing resultDiv for a new one to take its place
    resultDiv.replaceChildren();

    //function prompt for checking if our input is a palindrome
    const regex = /[^A-Za-z0-9]/gi;
    const tunedInput = input.replace(regex, "");
    const lowerCaseStr = tunedInput.toLowerCase();
    const tenary = lowerCaseStr === [...lowerCaseStr].reverse().join('') ? "is" : "is not";
    const resultMsg = `<strong>${originalValue}</strong> ${tenary} a palindrome`;
      
    //creating the funtion that runs for our cute-face in the case of the media queries to either smile or frown
    const sns = () => {
        if(tenary === 'is'){
            return smile();
        }
       else if(tenary === 'is not'){
            return frown();
        }
    }
    
    const smile = () => {
        changeMth.classList.add('smile-mouth');
        changeMth.classList.remove('frown-mouth');
    }
    const frown = () => {
        changeMth.classList.remove('smile-mouth');
        changeMth.classList.add('frown-mouth');
    
    }

    //adding a paragraph to our code body the show the result of said code
    const pTag = document.createElement("p");
    pTag.className = "result-text";
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    resultDiv.style.display = "block";
    sns();
}


checkButton.addEventListener("click", ()=>{
   checkPalindrome(textInput.value);
   textInput.value = "";
})
