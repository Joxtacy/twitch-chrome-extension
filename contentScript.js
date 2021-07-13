setInterval(() => {
    els = document.querySelectorAll('[aria-label="Claim Bonus"]');
    el = els && els[0];
    if (el != null) {
        today = new Date();
        s = today.getSeconds();
        m = today.getMinutes();
        ss = s < 10 ? "0" + s : s;
        mm = m < 10 ? "0" + m : m;
        time = today.getHours() + ":" + mm + ":" + ss
        console.info("[TWITCH CLICKER]: It got clicked!", time);
        el.click();
    } else {
        console.warn("[TWITCH CLICKER]: Tried to click the button, but couldn't find one");
    }
}, 10000);

/*
nodeList = document.getElementsByClassName("community-points-summary tw-align-items-center tw-flex tw-full-height");
targetNode = nodeList && nodeList.length && nodeList[0];
config = { attributes: false, childList: true, subtree: true };

observerCallback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            els = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
            el = els && els[0];
            if (el != null) {
                today = new Date();
                s = today.getSeconds();
                m = today.getMinutes();
                ss = s < 10 ? "0" + s : s;
                mm = m < 10 ? "0" + m : m;
                time = today.getHours() + ":" + mm + ":" + ss
                el.click();
            }
        }
    }
};

if (targetNode) {
    observer = new MutationObserver(observerCallback);
    observer.observe(targetNode, config);
} else {
    setTimeout(function() {
        nodeList = document.getElementsByClassName("community-points-summary tw-align-items-center tw-flex tw-full-height");
        targetNode = nodeList && nodeList.length && nodeList[0];
        observer = new MutationObserver(observerCallback);
        observer.observe(targetNode, config);
    }, 15000);
}
*/

