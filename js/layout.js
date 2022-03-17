function calc_gap (){
    let box_width = document.querySelector(".p_music_list").clientWidth;
    let item_width = document.querySelector(".p_music_list__item").clientWidth;
    let gap_i = 2;
    if(box_width - (item_width * 5) >= 0){
        gap_i = 5;
    }else if(box_width - (item_width * 4) >= 0){
        gap_i = 4;
    }else if(box_width - (item_width * 3) >= 0){
        gap_i = 3;
    }
    let gap = (box_width - (item_width * gap_i)) / (gap_i - 1);
    document.querySelector(".l_music_list").style.gap = `${gap - 1}px`;
    console.log("calc");
}
//最初に一度計算する
calc_gap();

//横幅の変動に合わせて計算する
window.addEventListener("resize",()=>{
    calc_gap();
});
