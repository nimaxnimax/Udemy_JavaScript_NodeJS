function startTimer(seconds) {
    setInterval(function() {
        if (seconds > 0) {
            console.log("Time remaining:", seconds, "seconds");
            seconds--;
        }
        else
        {
            console.log("OK!");
        }
    }, 1000);
}
startTimer(3);

