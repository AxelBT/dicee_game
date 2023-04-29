
const button = document.querySelector('input');
button.addEventListener('click', updatePage);
function updatePage() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
var randomNumber1, randomNumber2 ;
randomNumber1 = getRandomIntInclusive(1,6);
randomNumber2 = getRandomIntInclusive(1,6);
document.querySelector(".img1").setAttribute("src","images\\dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images\\dice"+randomNumber2+".png");
if(randomNumber1==randomNumber2){
document.querySelector(".refreshtext").innerText="X_X DRAW X_X";
}
else if(randomNumber1<randomNumber2){
document.querySelector(".refreshtext").innerText="(┬┬﹏┬┬)Player 2 Wins╰(*°▽°*)╯";
}
else{
document.querySelector(".refreshtext").innerText="╰(*°▽°*)╯Player 1 Wins(┬┬﹏┬┬)";
 }

}
