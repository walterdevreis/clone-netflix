
function play(){
    var player = new YT.Player('meuPlayer', {
        width: 540,
        height: 320,
        videoId: 'youtube.com/watch?v=NEp-ejKyXVw'
    });
}

$(".video").on("click", function() {
    player.playVideo();
});