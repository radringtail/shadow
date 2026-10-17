$(function(){
    if(localStorage.getItem("guideEnabled")){
        $("#secret-guide").removeClass("d-none");
    }

    if(localStorage.getItem("cardsEnabled")){
        $("#secret-cards").removeClass("d-none");
    }

    if(localStorage.getItem("madeFriend")){
        $("#friendship").removeClass("d-none");
    }
})

function randomVal(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function storeBskyIcon(handle){
    const url = `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=${handle}`;
    var bskyData = window.fetch(url)
    .then((response) => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    }).then((response) => {
        localStorage.setItem("avatarUrl", response.avatar);
        localStorage.setItem("bskyHandle", response.handle);
    });
    return bskyData;
}