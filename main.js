window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
        document.getElementById("header").style.backgroundColor = "#444";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("disabled").style.backgroundColor = "#444";
    } else {
        document.getElementById("header").style.background = "transparent";
        document.getElementById("header").style.position = "absolute";
        document.getElementById("disabled").style.backgroundColor = "transparent";
    }
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}