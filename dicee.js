var num1=Math.random();
num1=Math.floor(num1*6)+1;
var num2=Math.random();
num2=Math.floor(num2*6)+1;
if(num1>num2){
  document.querySelector(".win").innerHTML="Player 1 wins";
}
else{
  if(num1===num2){
    document.querySelector(".win").innerHTML="Tie";
  }
  else{
    document.querySelector(".win").innerHTML="Player 2 wins";
  }
}
switch(num1) {
  case 1:
  document.querySelector('.img1').setAttribute("src","dice1.png");
    break;
  case 2:
  document.querySelector('.img1').setAttribute("src","dice2.png");
    break;
  case 3:
  document.querySelector('.img1').setAttribute("src","dice3.png");
    break;
  case 4:
  document.querySelector('.img1').setAttribute("src","dice4.png");
    break;
  case 5:
  document.querySelector('.img1').setAttribute("src","dice5.png");
    break;
  case 6:
  document.querySelector('.img1').setAttribute("src","dice6.png");
    break;
  default:
}
switch(num2) {
  case 1:
  document.querySelector('.img2').setAttribute("src","dice1.png");
    break;
  case 2:
  document.querySelector('.img2').setAttribute("src","dice2.png");
    break;
  case 3:
  document.querySelector('.img2').setAttribute("src","dice3.png");
    break;
  case 4:
  document.querySelector('.img2').setAttribute("src","dice4.png");
    break;
  case 5:
  document.querySelector('.img2').setAttribute("src","dice5.png");
    break;
  case 6:
  document.querySelector('.img2').setAttribute("src","dice6.png");
    break;
  default:
}
