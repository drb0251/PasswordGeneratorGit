// STRETCH GOALS
// ability to set password length where user chooses length in an input fields
// add a 'copy-on-click' option for the passwords
// toggle symbols on/off
function generatePass() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
  
  let pass1El = document.getElementById("pass1-el")
  let pass2El = document.getElementById("pass2-el")
  
  password1 = ''
  password2 = ''
  
  for (i=0; i<15; i++) {
    randIndex = Math.floor(Math.random() * characters.length)
    password1 += characters[randIndex] 
  }
  for (i=0; i<15; i++) {
    randIndex = Math.floor(Math.random() * characters.length)
    password2 += characters[randIndex]
  } 
  
  pass1El.textContent = password1
  pass2El.textContent = password2  
}



