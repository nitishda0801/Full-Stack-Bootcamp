var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomNumber1+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomnum2=Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+randomnum2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomNumber1>randomnum2)
{
    document.querySelector("h1").innerHTML="🚩Player1 won!";
}
else
if(randomNumber1<randomnum2)
{
    document.querySelector("h1").innerHTML="🚩Player2 won!";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw!";
}

