window.addEventListener('load',function() {
    const playMusic = document.querySelector('.player-play');
    const playPrev = document.querySelector('.player-prev');
    const playNext = document.querySelector('.player-next');
    const playImg = document.querySelector('.player-image');
    const playerRemaining = document.querySelector('.player-remaining');
    const playerDuration = document.querySelector('.player-duration');
    const song = document.querySelector('#song');
    const processBar = document.querySelector('#progress-bar');
    const listSong = ['holo.mp3','home.mp3','spark.mp3','summer.mp3'];
    let indexMusic = 0;
    let playCondition = true;
    let rotia = 0;
    playMusic.addEventListener('click',handlePlayMusic);
    song.addEventListener('ended',function() {
        // this.currentTime = 0;
        // this.play();
        handleChangeMusic(1);
    })
    function handlePlayMusic(e) {
        if(playCondition) {
            song.play();
            playCondition = false;
            playMusic.classList.add('fa-pause');
            playImg.classList.add('is-playing');
            
        }else {
            song.pause();
            playCondition = true;
            playMusic.classList.remove('fa-pause');
            playImg.classList.remove('is-playing');
        }
    }
    playNext.addEventListener('click',function() {
        handleChangeMusic(1);
    })
    playPrev.addEventListener('click',function() {
        handleChangeMusic(-1);
    })
    function handleChangeMusic(condition) {
        if(condition === 1) {
            //next music
            indexMusic++;
            if(indexMusic > listSong.length - 1) {
                indexMusic = 0;
            }
            song.setAttribute('src',`./files/${listSong[indexMusic]}`);
        }else if(condition===-1){
            //previous music
            indexMusic--;
            if(indexMusic < 0) {
                indexMusic = listSong.length - 1;
            }
            song.setAttribute('src',`./files/${listSong[indexMusic]}`);
        }
        playCondition = true;
        handlePlayMusic()
    }
    function timeMusic() {
        const {duration,currentTime} = song;
        processBar.max = duration;
        processBar.value = currentTime;
        playerDuration.textContent = handleTimeMusic(duration);
        playerRemaining.textContent = handleTimeMusic(currentTime);
    }
    function handleTimeMusic(time) {
        let minutes = Math.floor(time/60);
        let seconds = Math.floor(time) % 60;
        return `${minutes}:${seconds<10?"0"+seconds:seconds}`;
    }
    // const timer = setInterval(timeMusic,1000);
    processBar.addEventListener('change',function() {
        song.currentTime = processBar.value;
    })
})