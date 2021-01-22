let playbackSet = false;
let reqquality = undefined;


document.addEventListener("DOMContentLoaded", function(event) {
    playerReady();
});

function updateQuality() {
    let player = document.querySelector('.html5-video-player');
    let quality = player.getAvailableQualityLevels();
    reqquality = quality[0];
    player.setPlaybackQualityRange(reqquality, reqquality);
    playbackSet = true;
};


function playerReady() {
    player = document.querySelector('.html5-video-player');
    if (player) {
        player.addEventListener("onStateChange", function(newState) {
            if (newState == 3 && !playbackSet) {
                updateQuality();
            }
            if (newState == -1) {
                player.setPlaybackQualityRange("highres", "highres");
                playbackSet = false;
            }
        });
        updateQuality();
    }
}


