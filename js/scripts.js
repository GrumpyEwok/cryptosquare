$(document).ready(function(){
  $("#button").click(function(){
    var input = $("#userInput").val().toLowerCase();
    input = input.replace(/[\.,\/#!\$%\^&\*;:{}=\-_`~\(\)'," ]/g,"")

    var n = Math.floor(Math.sqrt(input.length));
    var i = 0
    var encryptedMessage = ""

    for (i=0; i<n; i++){
      for (j=i; j<input.length; j+=n){
      encryptedMessage += input.charAt(j);

      }
    }

    var result = ""
    for (k=0; k<encryptedMessage.length; k += 5){
      result += encryptedMessage.substr(k, 5) + " "


    }
    console.log(result)
  });
});
