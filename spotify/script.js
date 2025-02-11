console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {
        songName: "lover", filepath: "songs/1.mp3", title: "covers/1.jpg"
    },
    {
        songName: "perfect", filepath: "songs/2.mp3", title: "covers/2.jpg"
    },
    {
        songName: "photograph", filepath: "songs/3.mp3", title: "covers/3.jpg"
    },
    {
        songName: "blank-space", filepath: "songs/4.mp3", title: "covers/4.jpg"
    },
    {
        songName: "cheapthrills", filepath: "songs/5.mp3", title: "covers/5.jpg"
    },
    {
        songName: "who says", filepath: "songs/6.mp3", title: "covers/6.jpg"
    }
]
songItems.forEach((element, i) =>{
element.getElementsByTagName("img")[0].src = songs[i].title;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
 console.log(progress)
 myProgressBar.value= progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
       element.classList.remove('fa-circle-pause') 
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
 element.addEventListener('click', (e) => {
 makeAllPlays()
 songIndex= parseInt(e.target.id)
 e.target.classList.remove('fa-circle-play')
 e.target.classList.add('fa-circle-pause')
 audioElement.src = `songs/${songIndex + 1}.mp3`
 masterSongName.innerText = songs[songIndex].songName;
 audioElement.currentTime = 0;
 audioElement.play()
 gif.style.opacity = 1;
 masterPlay.classList.remove('fa-circle-play')
 masterPlay.classList.add('fa-circle-pause')
 })
})
document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=5){
        songIndex = 0
    } else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
 audioElement.currentTime = 0;
 audioElement.play()
 masterPlay.classList.remove('fa-circle-play')
 masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<=0){
        songIndex = 0
    } else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
 audioElement.currentTime = 0;
 audioElement.play()
 masterPlay.classList.remove('fa-circle-play')
 masterPlay.classList.add('fa-circle-pause')
})