const heading =document . getElementById( " title");
const button = document . getElementById('btn');

button . addEventListener("click", function( ) {
    heading.textContent = "welcome to the world of Javascript"
});

const text = document.getElementById("text");
const styleBtn = document.getElementById("styleBtn");


styleBtn.addEventListener("click",function () {
    text.style.color= "blue";
    text.style.fontSize= "40px";
});

