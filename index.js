let tg = window.Telegram.WebApp; 

tg.expand();

tg.MainButton.setText("Подтвердить выбор"); 
tg.MainButton.textColor = "#000000"; 
tg.MainButton.setParams({"color": "#2cab37"}); 

let choose = '';

let chat_gpt = document.getElementById("chat_gpt");
chat_gpt.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'chat_gpt'; 
    }
});
let midjourney = document.getElementById("midjourney");
midjourney.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'midjourney';
    }
});
let stable = document.getElementById("stable");
stable.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'stable';
    }
});
let portret = document.getElementById("portret");
portret.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'portret';
    }
});
let gta = document.getElementById("gta");
gta.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'gta';
    }
});
let editor = document.getElementById("editor");
editor.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'editor';
    }
});
let anime = document.getElementById("anime");
anime.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'anime';
    }
});
let realistic = document.getElementById("realistic");
realistic.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'realistic';
    }
});
let infinity = document.getElementById("infinity");
infinity.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'infinity';
    }
});
let old = document.getElementById("old");
old.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'old';
    }
});
let anim_photo = document.getElementById("anim_photo");
anim_photo.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'anim_photo';
    }
});
let anim_query = document.getElementById("anim_query");
anim_query.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'anim_query';
    }
});
let video_icon = document.getElementById("video_icon");
video_icon.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'video_icon';
    }
});
let math = document.getElementById("math");
math.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'math';
    }
});
let task_by_photo = document.getElementById("task_by_photo");
task_by_photo.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'task_by_photo';
    }
});
let composition = document.getElementById("composition");
composition.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'composition';
    }
});
let ref = document.getElementById("ref");
ref.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'ref';
    }
});
let copir = document.getElementById("copir");
copir.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'copir';
    }
});
let rewrite = document.getElementById("rewrite");
rewrite.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'rewrite';
    }
});
let ads = document.getElementById("ads");
ads.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'ads';
    }
});
let social = document.getElementById("social");
social.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'social';
    }
});
let idea = document.getElementById("idea");
idea.addEventListener('click', function(){ 
    if (tg.MainButton.isVisible){ 
        tg.MainButton.hide();
        choose = '';
    }
    else{
        tg.MainButton.show();
        choose = 'idea';
    }
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(choose); 
});
