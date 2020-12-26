var Count = 30;
function ChangeScene () {
    let shade = document.getElementById("shade");
    let tutorial = document.getElementById("tutorial");
    let caterpillar = document.getElementById("caterpillar");
    tutorial.style.display = "none";
    shade.style.display = "none";
}

function CountDown () {
    Count--;
    if (Count < 0 ) {
        alert("Time's up");
        return;
    }
    else {
        document.getElementById("countNum").innerText = Count;
        console.log("Count = " + Count);
    }
}

function  GameStart () {
    ChangeScene();
    Count = 30;
    setInterval('CountDown()', "1000");
    
    
}


