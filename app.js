const btn = document.querySelector(".btn");
const box = document.querySelector(".container");
const para= document.querySelector(".colorHex");

function getRandomItem(arr) 
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}
function changeColor()
{
    var color=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    var col="#";
    for(let i=0; i<6; i++)
    {
        col=col+getRandomItem(color);
    }
    box.style.backgroundColor=col;
    para.innerText=col;
}

btn.addEventListener("click", changeColor);