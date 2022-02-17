let  btn_goUp = document.getElementById('goTop_btn');

const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const scrollUp = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_goUp.style.display = "block";
    } else {
        btn_goUp.style.display = "none";
    }
}

window.onscroll = function(){
    scrollUp();
}

btn_goUp.addEventListener("click", scrollUp);