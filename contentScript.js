setInterval(() => {
    els = document.getElementsByClassName("tw-button tw-button--success tw-interactive");
    el = els && els[0];
    if (el != null) {
        today = new Date();
        s = today.getSeconds();
        m = today.getMinutes();
        ss = s < 10 ? "0" + s : s;
        mm = m < 10 ? "0" + m : m;
        time = today.getHours() + ":" + mm + ":" + ss
        console.info("It got clicked!", time);
        el.click();
    }
}, 60000);
