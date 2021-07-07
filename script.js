let player = document.getElementById('player');
let obs =  document.getElementById('obs');

function jmp() {
    if (player.classList != "animate"){
        player.classList.add("animate");
    }
    setTimeout(function () {
        player.classList.remove("animate");
    },500);
}

let checksts = setInterval(function () {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let obsleft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));
    if (obsleft < 20 && obsleft>0 && playerTop>=130){
        obs.style.animation = "none";
        obs.style.display = "none";
        alert("Looser")
    }
},10)