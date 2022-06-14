const playMusic = document.querySelector('.icon-play-music');
const playNext = document.querySelector('.music-wrap__icon-next');
const playPre = document.querySelector('.music-wrap__icon-pre');
const playRepeat = document.querySelector('.music-wrap__icon-repeat');
const song = document.getElementById('song');
const musicOverlay = document.querySelector('.music-wrap__img-overlay');
const imgMusic = document.querySelector('.img-music');
const titleMusic = document.querySelector('.music-wrap__title');
const singerMusic = document.querySelector('.music-wrap__singer');
const currentMusic = document.querySelector('.current-music');
const durrentMusic = document.querySelector('.duration-music');
const processBar = document.querySelector('#process-bar');
let indexMusic = 0;
let timer;
const listSong = [
    {
        id:1,
        img:'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title:'All Falls Down',
        singer:'Alan Walker',
        music:'All Falls Down.mp3',
    },
    {
        id:2,
        img:'https://media.istockphoto.com/photos/party-people-enjoy-concert-at-festival-summer-music-festival-picture-id1324561072?b=1&k=20&m=1324561072&s=170667a&w=0&h=LwWrgpVzxoznttv_6qXMVtZHer1QSLNbfHmORZCFhN0=',
        title:'Darkside',
        singer:'Alan Walker',
        music:'Darkside.mp3',
    },
    {
        id:3,
        img:'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title:'Believer',
        singer:'Imagine Dragons',
        music:'Imagine Dragons.mp3',
    },
    {
        id:4,
        img:'https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title:'Thurder',
        singer:'Imagine Dragons',
        music:'Thunder.mp3',
    }
]
// repeat
let repeatCodition = 0;
playRepeat.addEventListener('click',function() {
    repeatCodition++;
    playRepeat.classList.toggle('active');
});
//ended
song.addEventListener('ended',function() {
    if(repeatCodition===1) {
        indexMusic--;
        handleChangeMusic(1);
        repeatCodition++;
    }else {  
        handleChangeMusic(1);
        repeatCodition--;
    }
})
//play music
let isPlay = true;
playMusic.addEventListener('click',handlePlayMusic);
musicOverlay.addEventListener('click',handlePlayMusic);
function handlePlayMusic() {
    if(isPlay) {
        song.play();
        playMusic.classList.add('fa-pause');
        musicOverlay.classList.add('play');
        musicOverlay.innerHTML = '<i></i>';
        imgMusic.classList.add('rotate');
        timer = setInterval(changeTimeMusic,1000);
        isPlay = false
    }else {
        clearInterval(timer);
        song.pause();
        playMusic.classList.remove('fa-pause');
        musicOverlay.classList.remove('play');
        musicOverlay.innerHTML = '<i class="fa fa-play"></i>';
        imgMusic.classList.remove('rotate');
        isPlay = true;
    }
}
//next music and pre music
playNext.addEventListener('click',function() {
    handleChangeMusic(1);
});
playPre.addEventListener('click',function() {
    handleChangeMusic(-1);
});
function handleChangeMusic(condition) {
    if(condition === 1) {
        //next music
        indexMusic++;
        if(indexMusic > listSong.length-1) {
            indexMusic = 0;
        }
        updateChangeMusic(indexMusic);
    }else if(condition === -1) {
        //pre music
        indexMusic--;
        if(indexMusic < 0) {
            indexMusic = listSong.length-1;
        }
        updateChangeMusic(indexMusic);
    }
    isPlay = true;
    handlePlayMusic();
}
function updateChangeMusic(index) {
    imgMusic.setAttribute('src',`${listSong[index].img}`);
    titleMusic.textContent = listSong[index].title;
    singerMusic.textContent = listSong[index].singer;
    song.setAttribute('src',`./music/${listSong[index].music}`);
}
//drag process
processBar.addEventListener('change',function() {
    song.currentTime = processBar.value;
})
//time music
function changeTimeMusic() {
    let {duration,currentTime} = song;
    processBar.max = duration;
    processBar.value = currentTime;
    durrentMusic.textContent = handleTimeMusic(duration);
    currentMusic.textContent = handleTimeMusic(currentTime);
}
function handleTimeMusic(time) {
    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time)%60;
    return `${minutes<10 ? "0"+minutes : minutes}:${seconds<10 ? "0"+seconds : seconds}`;
}
