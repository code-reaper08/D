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