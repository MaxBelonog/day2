//create function, picks integer between 1 and 100, asks for guesses
// if too low or too high, computer notifies them

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var x=getRandom(1,100);

console.log(x);

answer=prompt("What number do you choose?");

if(answer>x){
  alert("Too high")
}else if(answer<x){
  alert("Too low")
} else{
  alert("Exactly")
}
