let darkLight = document.querySelector('.darkLight')

darkLight.addEventListener('click',function(){
    darkLight.classList.toggle('active')
})

let links = document.querySelector('.links');
let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active')
    links.classList.toggle('active')
})

let icon = document.getElementById('icon')
let mySong = document.getElementById('mySong')


icon.addEventListener('click',function(){
    if(mySong.paused){
        mySong.play()
        icon.src = "./ss/pause.png"
    }else{
        mySong.pause()
        icon.src = "./ss/play.png"
    }
})