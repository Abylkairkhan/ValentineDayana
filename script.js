initWidth = 5
initHeight = 4
$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    
    function openWithDelay() {
        open();
        setTimeout(function() {
            close();
            showAlert();
        }, 5000); 
    }
    }
})
document.getElementById("reset").addEventListener("click",()=>{
    initWidth += 3;
    initHeight += 2;
    document.getElementById("open").style.width = `${initWidth}rem`;
    document.getElementById("open").style.height = `${initHeight}rem`;

})
document.getElementById('open').addEventListener('click', () => {

    alert("Я так рад что ты выбрала Да) \nОчень рад что познакомился с тобой ♡\nС тобой весело и забавно♡\nБлагодоря тебе узнал что такое хилс и стрип (ха ха)\nМне нравиться не давать тебе спать и болтать ночи на пролет˚ʚ♡ɞ˚\nНадеюсь мы сможем как нибудь увидеться)")
})