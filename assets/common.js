const maxAttempts = 3;
const applyEndpoint = 'https://script.google.com/macros/s/AKfycbwlEjbC3oea0ZNrFAHoa-yvli-PQbjhjSBtyfSNp0LZPYBMGUdY6tUuj178A5YOCE4G/exec';

$(function(){
    if(localStorage.getItem("guideEnabled")){
        $("#secret-guide").removeClass("d-none");
    }

    if(localStorage.getItem("cardsEnabled")){
        $("#secret-cards").removeClass("d-none");
    }

    if(localStorage.getItem("cardReceived")){
        $("#friendship").removeClass("d-none");
    }

    if(localStorage.getItem("appliedToGHOST")){
        $("#ceremony").removeClass("d-none");
    }
})

function randomVal(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function storeBskyData(handle){
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