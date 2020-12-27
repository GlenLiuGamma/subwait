//Global Variables for controls
const MAXHP = 41;
var start = false;
var TimeCount = 30;
var HP = MAXHP;
var caterpillar_pos = 80;
var delay = 0;
var bloodbar = 0;
var total = -1;

//monster coefficient
var MonsterCount = 0;
var monster_posX = 550;
var monster_posY = 1250;
var monster_velocity_y = 10;
var monster_velocity_x = 0;
var monster_gen_x = 550;
var monster_queue = 0;
const random_monster = 10;

function px2int (a) {
    return parseInt(a.replace('px', ''));
}
function ChangeScene () {
    let shade = document.getElementById("shade");
    let tutorial = document.getElementById("tutorial");
    let caterpillar = document.getElementById("caterpillar");
    tutorial.style.display = "none";
    shade.style.display = "none";
    caterpillar.style.left = caterpillar_pos + "%";
    //caterpillar.style.width = '50px';
}


function CountDown () {
    TimeCount--;
    //console.log(Document.getElementById("caterpillar").position);
    if (TimeCount < 0 ) {
        window.open('Fail.html', '_self');
        return;
    }
    if (HP <= 0) {
        window.open('Arrive.html', '_self');
        return;
    }
    else {
        if (delay >= 3) {
            delay = 0;
        }
        else {
            delay = delay + 1;
        }
        if (TimeCount >= 10)
            document.getElementById("countNum").innerText = "00:" + TimeCount;
        else
            document.getElementById("countNum").innerText = "00:0" + TimeCount;
    }
}

function Monstermove (K) {
    var M = setInterval(function() {
        let caterpillar_y = document.getElementById('caterpillar').top;
        var y = px2int(K.style.top) + monster_velocity_y;
        var x = px2int(K.style.left) + monster_velocity_x;
        K.style.top = y + 'px';
        if (monster_posY <= 0) {
            monster_posY = 1250;
            //monster_gen_x-=100;
        }
        if (px2int(K.style.top) > monster_posY) {
            monster_posY= monster_posY - px2int(K.style.height);
            clearInterval(M);
        }
        
    } ,50);
}

function GenerateMonster () {
    var monster = document.createElement("div");
    monster.style.position = "absolute";
    monster.style.left = monster_gen_x + 'px';
    monster.style.top = "100px";
    monster.style.backgroundRepeat = "no-repeat";
    var type = total%10 + 1;
    monster.style.backgroundImage = "url(source/monster"+type+".png)";
    switch (type) {
    case 1:
        monster.style.height = "200px";
        monster.style.width = "75px";
        break;
    case 2:
        monster.style.height = "200px";
        monster.style.width = "104px";
        break;
    case 7:
        monster.style.height = "300px";
        monster.style.width = "156px";
        break;
    case 3:
    case 4:
        monster.style.height = "150px";
        monster.style.width = "164px";
        break;
    case 8:
        monster.style.height = "200px";
        monster.style.width = "155px";
        break;
    case 9:
        monster.style.height = "150px";
        monster.style.width = "162px";
        break;
    case 5:
        monster.style.height = "200px";
        monster.style.width = "113px";
        break;
    case 6:
        monster.style.height = "200px";
        monster.style.width = "175px";
        break;
    case 10:
        monster.style.height = "350px";
        monster.style.width = "208px";
        break;
    }
    
    document.getElementById('scene').appendChild(monster);
    Monstermove(monster);

}


function CheckCaterpillar () {
    console.log("HP = " + HP);
    if (delay >= 3 && caterpillar_pos < 80 && HP <= MAXHP) { 
        delay = 0;
        caterpillar_pos+=10;
        HP= (HP/5 + 1) * 5;
        bloodbar--;
        document.getElementById("blood_contain").src = 'source/bloodbar' + bloodbar + '.png';
    }
    document.getElementById("caterpillar").style.left = caterpillar_pos + '%';

}

function TapScreen () {
    total++;
    delay--;
    HP--;
    if (delay<0) delay = 0;
    let caterpillar = document.getElementById("caterpillar");
    if (start && HP>=0) {
        MonsterCount++;
        if (MonsterCount == 5) {
            caterpillar_pos-=10;
            caterpillar.style.left = caterpillar_pos + "%";
            bloodbar++;
            document.getElementById("blood_contain").src = 'source/bloodbar' + bloodbar + '.png';
            MonsterCount = 0;
        }
    }
    GenerateMonster();
}

function GameStart () {
    ChangeScene();
    start = true;
    setInterval('CountDown()', "1000");
    setInterval('CheckCaterpillar()', "500");
}
