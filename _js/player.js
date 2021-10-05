var video = document.getElementById("playerVideo");


function playPause(){
   if(video.paused) {
       video.play();
   } else{
       video.pause();
   }
}

function maxVolume(){
    video.volume += 0.1;
}

function minVolume(){
    video.volume -= 0.2;
}
 function mudo (){
     video.volume = 0.0;
        
 }

function reduzirTela(){
    video.width = 300;
}

function telaNormal(){
    video.width = 500;
}

function telaCheia(){
    video.requestFullscreen();
}

