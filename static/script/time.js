window.onload = () => {
    let i = 0;
    function nowDate() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        document.getElementById("time").innerHTML = year + "." + month + "." + day + " " + hours + ":" + minutes + ":" + seconds;
    }
    setInterval(nowDate, 1000);
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            toggleFullScreen();
        }
    })
}
