const lvl = document.querySelector('.header__timer-extra');
let speed = 30

function level(i = 0) {
    lvl.innerHTML = i
    i++
    if (i > 50 && i < 75) {
        speed = 50
    }else if(i > 75 && i < 85){
        speed = 80
    }else if(i > 84 && i < 95){
        speed = 120
    }else if(i> 94){
        speed = 170
    }
    
   if (i <= 100) {
    setTimeout(() => {
        level(i)
    }, speed);
   }
}
level()



