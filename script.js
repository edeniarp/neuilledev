window.onload = function() {
    setTimeout(function() {
        document.querySelector('.pdp').classList.add('move-left');
        document.querySelector('.status').classList.add('move-right');
    }, 1000);
};
