document.querySelector('form').addEventListener("submit", e => {
  e.preventDefault();
  doIt();
});

var reverseString = function(str){
  return str.split("").reverse().join("");
};

var countWords = function(str){
  return str.split(" ").length;
}

var doIt = function(){
  var stringToReverse = document.querySelector('#reverse1').value;
  var revOutput = document.querySelector('#reverse2');

  var textToCount = document.querySelector('#words1').value;
  var countOutput = document.querySelector("#words2");
  revOutput.value = reverseString(stringToReverse);
  countOutput.value = countWords(textToCount);
};

doIt();
