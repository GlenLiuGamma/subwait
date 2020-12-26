//Global Variables for controls
var start = false;
var TimeCount = 30;
var MonsterCount = -1;
var HP = 30;
var caterpillar_pos = 80;


function ChangeScene () {
    let shade = document.getElementById("shade");
    let tutorial = document.getElementById("tutorial");
    let caterpillar = document.getElementById("caterpillar");
    tutorial.style.display = "none";
    shade.style.display = "none";
    caterpillar.style.left = caterpillar_pos + "%";
}

function CountDown () {
    TimeCount--;
    if (TimeCount < 0 ) {
        alert("Time's up");
        return;
    }
    else {
        document.getElementById("countNum").innerText = TimeCount;
    }
}

function  GameStart () {
    ChangeScene();
    start = true;
    setInterval('CountDown()', "1000");
}

function GenerateMonster() {
    
}

function TapScreen () {
    let caterpillar = document.getElementById("caterpillar");
    if (start) {
        MonsterCount++;
        console.log("MonsterCount " + MonsterCount);
        if (MonsterCount == 7) {
            caterpillar_pos-=10;
            caterpillar.style.left = caterpillar_pos + '%';
            MonsterCount = 0;
        }
    }
}