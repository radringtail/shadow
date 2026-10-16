$(function(){
    if(localStorage.getItem("guideEnabled")){
        $("#secret-guide").removeClass("d-none");
    }

    if(localStorage.getItem("cardsEnabled")){
        $("#secret-cards").removeClass("d-none");
    }
})

function randomVal(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
